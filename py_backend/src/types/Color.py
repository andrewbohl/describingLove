class Color:
    def __init__(self, kwargs={}):
        self.id = kwargs.get('id')
        self.background = kwargs.get('background')
        self.text = kwargs.get('text')