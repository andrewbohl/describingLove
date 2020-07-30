from sqlalchemy import Column, DateTime, String, Integer, func, ForeignKey, UniqueConstraint
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# https://www.postgresqltutorial.com/postgresql-data-types/

class Post(Base):  
    __tablename__ = 'posts'
    id = Column(String, primary_key=True)
    title = Column(String)
    description = Column(String, nullable=False)
    postauthor = Column(String, ForeignKey('users.id'))
    createdat = Column(DateTime, default=func.now())
    updatedat = Column(DateTime, default=func.now())

    def __repr__(self):
        return 'id: {}, root cause: {}'.format(self.id, self.title)

class User(Base):
    __tablename__ = 'users'
    id = Column(String, primary_key=True)
    name = Column(String)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    permissions = Column(String, default="USER")
    createdat = Column(DateTime, default=func.now())
    updatedat = Column(DateTime, default=func.now())
    resetToken = Column(String)
    resetTokenExpiry = Column(DateTime)

class Colors(Base):
    __tablename__ = 'colors'
    id = Column(String, primary_key=True)
    background = Column(String, nullable=False)
    text = Column(String, nullable=False)