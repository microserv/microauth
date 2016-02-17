from microauth.settings.base import *

try:
    from microauth.settings.local import *
except ImportError:
    print('Local settings file not found.')

