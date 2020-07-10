from src.types.Color import Color
import json


def validateColorStrings(key, colorString):
    if colorString[0] == "#" and len(colorString) == 7:
        try:
            int(colorString[1:], 16)
        except ValueError:
            return f'{key.lower()} is not a valid color in hex format'
    else:
        return f'{key.lower()} does not start with # or is not proper length'
            

def payloadToColor(payload:dict):
    color = Color()
    # {
    #  "background": "#ABD4CF",
    #  "text": "#123456"
    # }
    # make sure keys are lower, values are 7 chars and start with #
    errors = []
    for key, value in payload.items():
        if key not in ["id"]:
            key = key.lower()
            value = value.upper()
            error = validateColorStrings(key, value)
            if not error:
                color.key = value
            else:
                errors.append(error)
    if errors:
        return errors
    return color