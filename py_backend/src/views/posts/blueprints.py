from flask import Blueprint, request, make_response, jsonify
from flask_cors import CORS, cross_origin
import src.views.posts.connection as post

post_blueprints = Blueprint('post', __name__, url_prefix='/post')
CORS(post_blueprints, supports_credentials=True, resources={
    r"/*":{
        "origins": "http://localhost:5000"
    }
})

@post_blueprints.route('/', methods=["GET", "OPTIONS"])
@cross_origin()
def getAllPosts():
    return post.getALLPosts()


@post_blueprints.route('/create', methods=["POST", "OPTIONS"])
@cross_origin(allow_headers=['Content-Type'])
def createOnePost():
    if request.method == "POST":
        payload = request.get_json()
        print(payload)
        return post.createPost(payload)

@post_blueprints.route('/id=<id>', methods=["GET"])
def getOnePost(id):
    if request.method == "GET":
        data = post.getPostById(id)
        # response = make_response(data)
        # if not data:
        #     response.code = 404
        # else: response.code = 200        
        return data

@post_blueprints.route('/random', methods=["GET"])
def getRandomPost():
    if request.method=="GET":
        data = post.getRandomPostId()
        return data