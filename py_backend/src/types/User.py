class User:
    #__slots__ = ["_id", "name", "email", "password", "permissions"]
    _id = None
    name = None
    email = None
    password = None
    permissions = None

    def __init__(self, **kwargs):
        for key, value in kwargs.items():
            locals()[key] = value

            
u = User(**dict(name="Andrew", email='email@email.com'))
print(getattr(u, 'name'))
