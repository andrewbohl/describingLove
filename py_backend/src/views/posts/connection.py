import uuid
import datetime as datetime
import json
import os
import random
from cryptography.fernet import Fernet

from src.types.Post import Post
from database.postgres.connection import Postgres

# get one post
def getPostById(id):
    db = Postgres()
    db.cur.execute("""
    SELECT * FROM posts WHERE id = %s
    ;""", (id,))
    post = db.cur.fetchone()
    if post:
        post = Post(dict(post)).__dict__
    db.close_connection()
    return json.dumps({'data':post, 'status':200})

# get all posts
def getALLPosts():
    db = Postgres()
    db.cur.execute("""
    SELECT * FROM posts
    ;""")
    posts = db.cur.fetchall()
    db.close_connection()
    posts = [Post({"id":post[0], 
                    "title":post[1],
                    "description":post[2],
                    "postauthor":post[3],
                    "createdat":post[4],
                    "updatedat":post[5]
                    }).__dict__ for post in posts]
    return json.dumps({
        "status":200,
        "data": posts
    })

# create a post
def createPost(payload):
    db = Postgres()
    id_ = str(uuid.uuid4()).replace('-', '')
    createdAt = datetime.datetime.now()
    updatedAt = createdAt
    #
    # author = read userId from cookie
    author = "1db8403bef7b44ccad5e2c47a8d45947"
    db.cur.execute(
        """ 
        INSERT INTO posts (id, title, description, postauthor, createdat, updatedat)
        VALUES (%s, %s, %s, %s, %s, %s)
    ;""", (id_, payload.get("title"), payload.get("description"), author, createdAt, updatedAt)
    )
    db.conn.commit()
    db.close_connection()
    return json.dumps({
        "status":201,
        "message": "post created"
    })

# random Id
def getRandomPostId():
    allPosts = json.loads(getALLPosts())['data']
    randomPost = random.choice(allPosts)
    return json.dumps({
        "status":200,
        "data":randomPost
    })
# delete a post
# edit a post