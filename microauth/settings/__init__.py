from microauth.settings.base import *  # flake8: noqa

try:
    from microauth.settings.local import *  # flake8: noqa
except ImportError:
    print('Local settings file not found.')

