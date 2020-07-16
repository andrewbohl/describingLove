import json

from flask import Blueprint, request, make_response, jsonify
from flask_jwt_extended import set_access_cookies
from flask_cors import CORS, cross_origin

from src.lib.auth import decode_auth_token
import src.views.user.connection as users
import src.lib.auth as auth


user_blueprints = Blueprint('user', __name__, url_prefix='/user')
CORS(user_blueprints,
    supports_credentials=True,
    resources={
        r"/*":{
            "origins": "http://127.0.0.1:5000"
        }
    }
)

@user_blueprints.route('/', methods=["GET"])
# @cross_origin
def getAllUsers():
    return str({
        'response_code':200,
        'message':"Return list of users here"
    })

@user_blueprints.route('/signup', methods=["POST"])
@cross_origin(supports_credentials=True)
def signup():
    # if request.method == "POST":
        payload = request.get_json()
        print(payload)
        data = users.createUser(payload)
        resp = make_response(jsonify(data))
        cookie_value = auth.encode_auth_token(data['data']['id'])
        print(cookie_value)
        resp.set_cookie(
            key='descLoveCook', 
            value=cookie_value,
            domain='127.0.0.1',
            max_age=1000*60*60*24*365 )
        return resp
#signin
@user_blueprints.route('/signin', methods=["POST"])
@cross_origin(supports_credentials=True)
def userSignin():
    payload = request.get_json()
    # check db for correct email and password
    result = users.signinUser(payload)
    if result['status'] == 200:
        resp = make_response(jsonify(result))
        cookie_value = auth.encode_auth_token(result['data']['id'])
        resp.set_cookie(
            key='descLoveCook', 
            value=cookie_value,
            domain="dev.localhost",
            max_age=1000*60*60*24*365 )
        return resp
    else:
        return make_response(jsonify(result), result['status'])

#logout
@user_blueprints.route('/logout', methods=["GET"])
@cross_origin(supports_credentials=True)
def userLogout():
    # clear cookie from session
    # req = request.cookie
    resp = make_response(jsonify({"message":"Succesfully logged out"}), 200)
    resp.delete_cookie(
            key='descLoveCook', 
            domain='dev.localhost',
            )
    return resp

@user_blueprints.route("/me", methods=["GET"])
@cross_origin(supports_credentials=True)
def me():
    cookie = request.cookies.get("descLoveCook")
    if cookie:
        userId = decode_auth_token(cookie)
        user = users.userById(userId)
        if user:
            resp = make_response(jsonify(user))
            return resp
    return make_response(jsonify({"message":"User not found"}), 404)
# edit permissions
    
