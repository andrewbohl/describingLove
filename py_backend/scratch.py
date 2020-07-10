from database.postgres.connection import Postgres
db = Postgres()
db.cur.execute("SELECT * FROM user")
print(db.cur.fetchone()[0])