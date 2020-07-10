from datetime import datetime as datetime

class Post:
    def __init__(self, kwargs={}):
        self.id = kwargs.get("id")
        self.title = kwargs.get("title")
        self.description = kwargs.get("description")
        self.postauthor = kwargs.get("postauthor")
        if type(kwargs.get("createdat")) is datetime:
            self.createdat = datetime.strftime(kwargs.get("createdat"), "%Y-%m-%d %H:%M:%S.%f")
            self.updatedat = datetime.strftime(kwargs.get("updatedat"), "%Y-%m-%d %H:%M:%S.%f")
        # else: # type(kwargs.get("createdat")) is str:
            # self.createdat = None #datetime.datetime.now()
            # self.updatedat = None #datetime.datetime.now()