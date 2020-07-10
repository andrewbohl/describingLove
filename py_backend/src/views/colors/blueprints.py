from flask import Blueprint, request, make_response, jsonify
from flask import Response
from flask_cors import CORS, cross_origin

from src.views.colors.connection import getColorById
from src.views.colors.utils import payloadToColor

import json

colors_blueprints = Blueprint('colors', __name__, url_prefix='/color')
CORS(colors_blueprints, supports_credentials=True, resources={
    r"/*":{
        "origins": "http://localhost:5000"
    }
})

@colors_blueprints.route('/id/<id>', methods=["GET", "OPTIONS"])
def getColorId(id):
    color = getColorById(id)
    if color:
        resp = make_response(jsonify(color))
        return resp
    else:
        return Response(status=404)

@colors_blueprints.route('/create', methods=["POST", "OPTIONS"])
def createColor():
    req = request.get_json()
    data = payloadToColor(req)
    print(data)
    if type(data) is str:
        return Response(status=400)
    
    # unpack payload, to color obj, and validate inputs
    return json.dumps(data.__dict__)

