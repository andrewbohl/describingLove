from flask import Blueprint, request, make_response, jsonify
from flask import Response
from flask_cors import CORS, cross_origin

from src.views.colors.connection import getColorById, createColor
from src.views.colors.utils import payloadToColor
from src.lib.auth import decode_auth_token

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
def postColor():
    req = request.get_json()
    data = payloadToColor(req)
    print(data)
    if type(data) is str:
        return Response(status=400)
    
    resp =  make_response(jsonify(createColor(data)))
    # unpack payload, to color obj, and validate inputs
    return resp

@colors_blueprints.route('/delete/<colorId>', methods=["DELETE"])
def deleteColorById(colorId):
    # pull user making request to pass to delete function
    if colorId:
        cookie = request.cookies.get("descLoveCook")
        # decode cookie
        if cookie:
            userId = decode_auth_token(cookie)
            
        return json.dumps(cookie)
    else:
        return json.dumps({"No colorId specified in route"})
