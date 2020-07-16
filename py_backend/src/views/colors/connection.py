import uuid
from src.types.Color import Color
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
def createColor(payload: Color):
    db = Postgres()
    id_ = str(uuid.uuid4()).replace('-', '')
#     
    db.cur.execute(
        """ 
        INSERT INTO colors (id, background, text)
        VALUES (%s, %s, %s) RETURNING id
    ;""", (id_, payload.background, payload.text)
    )
    created_id = db.cur.fetchone()[0]
    db.conn.commit()
    db.close_connection()
    return {
        "status":201,
        "message": "color combination recorded",
        "data": {"id":created_id}
    }
# edit color combo

# delete color combo
def deleteColor(colorId, userId):
    # check if the user has delete permissions
    db = Postgres()
    db.cur.execute("""
    SELECT permissions FROM users WHERE id = %s
    ;""", (userId,))
    # if they do, delete it
    if db.cur.fetchone()[0]['permissions'] in ['DELETEITEM', 'ADMIN']:
        db.cur.execute("""
        DELETE FROM colors WHERE id = %s
        ;""",(colorId,))
        db.commit()
        db.close_connection()
        return {
            "status": 200,
            "message":"Color successfully deleted"
        }
    # if they dont, return error
    else:
        raise Exception("Invalid permissions to perform action")
    