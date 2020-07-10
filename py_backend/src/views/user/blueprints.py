from flask import Blueprint, request, make_response, jsonify
from flask_jwt_extended import set_access_cookies
from flask_cors import CORS, cross_origin
import src.views.user.connection as users
import src.lib.auth as auth
import json

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
        # data = json.loads(users.createUser(payload))
        resp = make_response(jsonify(payload))
        resp.cookie(key='token', value='cookie', domain='127.0.0.1', max_age=10000 )
        # resp.headers['Access-Control-Allow-Credentials'] = 'true'
        # set_access_cookies(resp, auth.encode_auth_token(payload['email']))
        # resp.set_cookie(key='token', value=auth.encode_auth_token(payload['email']), domain='127.0.0.1', max_age=10000 )
        return resp

    
