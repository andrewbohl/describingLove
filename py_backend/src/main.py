import json
import os

from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from src.views.user.blueprints import user_blueprints
from src.views.posts.blueprints import post_blueprints
from src.views.colors.blueprints import colors_blueprints

blueprints = [
    post_blueprints,
    user_blueprints,
    colors_blueprints,
]

app = Flask(__name__)
# app.config['JWT_TOKEN_LOCATION'] = 'cookies'  # Change this!
# jwt = JWTManager(app)
# CORS(app, supports_credentials=True)

cors = CORS(app, supports_credentials=True, resources={
    r"/*":{
        "origins": "http://localhost:5000"
    }
})


for bp in blueprints:
    CORS(bp)
    app.register_blueprint(bp)

@app.route('/', methods=["GET"])
def health_check():
    return make_response(jsonify(status=200, msg="App is live and ready"))

if __name__ == "__main__":
    app.run(debug = True, port=4000)    