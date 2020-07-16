import os
from cryptography.hazmat.backends import default_backend
print(default_backend())
salt = os.urandom(16)
print(salt)