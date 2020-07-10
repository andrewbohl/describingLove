import uuid
import datetime as datetime
import json
import os
from cryptography.fernet import Fernet

from database.postgres.connection import Postgres

cipher_suite = Fernet(os.getenv("key").encode('utf-8'))


def createUser(payload: dict):
    # Check for dup emails
    id_ = str(uuid.uuid4()).replace('-', '')
    createdAt = datetime.datetime.now()
    updatedAt = createdAt
    # encrypt password
    password = cipher_suite.encrypt(payload.get("password").encode('utf-8'))
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

    # Set cookie in browser

    # finally return user
    return json.dumps({
        'status': 200,
        'data': {
            "id": id_
        }
    })

# getAllUsers
# get single User
# updateUser
# deleteUser