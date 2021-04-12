from flask_restx import Api, Resource, reqparse
from functools import wraps
from flask import jsonify
from authlib.integrations.flask_oauth2 import ResourceProtector, current_token
from authlib.oauth2.rfc6750 import BearerTokenValidator
from authlib.jose import jwt, JsonWebKey
import requests


authorizations = {
    'apikey': {
        'type': 'apiKey',
        'in': 'header',
        'name': 'Authorization',
        'description': "Type in the *'Value'* input box below: **'Bearer &lt;JWT&gt;'**, where JWT is the token"
    },
    'oauth2': {
        'type': 'oauth2',
        'flow': 'implicit',
        'tokenUrl': 'https://oauth2.o-g.at/oauth2/token',
        'authorizationUrl': 'https://oauth2.o-g.at/oauth2/auth',
        'scopes': {
            'openid': 'profile access',
            'microbill': 'access app data',
        }
    }
}

import logging
import sys
log = logging.getLogger('authlib')
log.addHandler(logging.StreamHandler(sys.stdout))
log.setLevel(logging.DEBUG)

class MyBearerTokenValidator(BearerTokenValidator):

    def authenticate_token(self, token_string):

        url = 'https://hydra.o-g.at/oauth/introspect'
        data = {'token': token_string, 'token_type_hint': 'access_token'}
        auth = (secrets.internal_client_id, secrets.internal_client_secret)
        resp = requests.post(url, data=data, auth=auth)
        resp.raise_for_status()
        return resp.json()

    def request_invalid(self, request):
        return False

    def token_revoked(self, token):
        return token.revoked

require_oauth = ResourceProtector()
require_oauth.register_token_validator(MyBearerTokenValidator())

api = Api(version='1.0', title='Sample API',
    description='A sample API',
    security=['apikey', {'oauth2': 'microbill'}],
    authorizations=authorizations,
    decorators=[
        require_oauth('microbill')
    ])
