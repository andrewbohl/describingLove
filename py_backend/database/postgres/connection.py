import psycopg2
import psycopg2.extras
import datetime
import os


class Postgres:
    def __init__(self):
        self.conn = psycopg2.connect(
            host=os.getenv("dbHost"),
            database=os.getenv("dbName"),
            port=os.getenv("dbPort"),
            user=os.getenv("dbUser"),
            password=os.getenv("dbPassword")
            )
        self.cur = self.conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
    
    def close_connection(self):
        self.cur.close()
        self.conn.close()
        return self