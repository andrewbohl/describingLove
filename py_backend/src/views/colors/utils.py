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
    errors = []
    for key, value in payload.items():
        if key not in ["id"]:
            value = value.upper()
            error = validateColorStrings(key, value)
            if not error:
                setattr(color, key.lower(), value)
            else:
                errors.append(error)
    if errors:
        return errors
    return color