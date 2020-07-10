from src.types.Color import Color
import json


def validateColorStrings(key, colorString):
    if colorString[0] == "#" and len(colorString) == 7:
        try:
            int(colorString[1:], 16)
        except ValueError:
            f'{key.lower()} is not a valid color in hex format'
    return f'{key.lower()} is not a valid color in hex format'
            

def payloadToColor(payload:dict):
    color = Color()
    # {
    #  "background": "#ABD4CF",
    #  "text": "#123456"
    # }
    # make sure keys are lower, values are 7 chars and start with #
    errors = ''
    for key, value in payload.items():
        if key not in ["id"]:
            key = key.lower()
            value = value.upper()
            errors += validateColorStrings(key, value) + '\n'
            if not errors:
                color.key = value
       
    if errors:
        return errors
    return color