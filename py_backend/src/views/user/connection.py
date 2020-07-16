import uuid
import datetime as datetime
import json
import os
from cryptography.fernet import Fernet
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.kdf.scrypt import Scrypt
import bcrypt

from database.postgres.connection import Postgres

backend = default_backend()
salt = os.getenv("salt").encode('utf-8')
kdf = Scrypt(
     salt=salt,
     length=32,
     n=2**14,
     r=8,
     p=1,
     backend=backend
)


cipher_suite = Fernet(os.getenv("key").encode('utf-8'))


def createUser(payload: dict):
    # Check for dup emails
    id_ = str(uuid.uuid4()).replace('-', '')
    createdAt = datetime.datetime.now()
    updatedAt = createdAt
    # encrypt password
    password = str(kdf.derive(payload.get("password").encode('utf-8')))

    db = Postgres()
    db.cur.execute(
        """
        INSERT INTO users (id, name, email, password, permissions, createdat, updatedat)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        ;""", (
            id_, payload.get("name"), payload.get(
                "email"), password, "USER", createdAt, updatedAt
        )
    )
    db.conn.commit()
    db.close_connection()

    # finally return user
    return {
        'status': 200,
        'data': {
            "id": id_
        }
    }


def signinUser(payload):
    email, password = payload.get('email'), payload.get('password')
    db = Postgres()
    db.cur.execute("""
    SELECT id, password FROM users WHERE email = %s
    ;""", (email,))
    user = db.cur.fetchone()
    id_, stored_password = user[0], user[1]
    if not id_:
        # Raise no email found
        return {"status": 404, "message": "No email found"}
    # password
    db.close_connection()

    
    print(stored_password)
    kdf = Scrypt(
     salt=salt,
     length=32,
     n=2**14,
     r=8,
     p=1,
     backend=backend
)
    
    if str(kdf.derive(password.encode('utf-8')))!=stored_password:
        return {"status": 400, "message": "Invalid password"}         
    return {"status": 200, "data": {"id": id_}}
# getAllUsers
# get single User
def userById(userId):
    db = Postgres()
    db.cur.execute("SELECT id, name, email, permissions FROM users WHERE id = %s;", (userId,))
    user = db.cur.fetchone()
    if user:
        return {
            "status":200,
            "data": {
                "id":user[0],
                "name":user[1],
                "email":user[2],
                "permissions":user[3]
            }
        }
# updateUser
# deleteUser
