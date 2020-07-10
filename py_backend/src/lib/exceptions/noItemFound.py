class Error:
    pass

class NoItemFound(Error):
    def __init__(self, message):
        self.message = message