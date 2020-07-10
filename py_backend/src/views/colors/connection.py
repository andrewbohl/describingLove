import uuid

from database.postgres.connection import Postgres

# Get one color combo
def getColorById(colorId: str):
    db = Postgres()
    db.cur.execute(
        """
        SELECT * FROM colors WHERE id = %s
        ;""", (colorId,)
    )
    color = db.cur.fetchone()
    db.close_connection()
    if color:
        print(color)
        return color
    else:
        return None #{'error': "No item found for that id", 'status':404}
        # raise Exception('No Color found for that id')
    

# Get many colors
# def getManyColors(numColors:int)

# Create new color combo
# id_ = str(uuid.uuid4()).replace('-', '')
# def createPost(payload):
#     db = Postgres()
#     id_ = str(uuid.uuid4()).replace('-', '')
#     createdAt = datetime.datetime.now()
#     updatedAt = createdAt
#     #
#     # author = read userId from cookie
#     author = "1db8403bef7b44ccad5e2c47a8d45947"
#     db.cur.execute(
#         """ 
#         INSERT INTO posts (id, title, description, postauthor, createdat, updatedat)
#         VALUES (%s, %s, %s, %s, %s, %s)
#     ;""", (id_, payload.get("title"), payload.get("description"), author, createdAt, updatedAt)
#     )
#     db.conn.commit()
#     db.close_connection()
#     return json.dumps({
#         "status":201,
#         "message": "post created"
#     })
# edit color combo

# delete color combo