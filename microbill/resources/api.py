from flask_restx import Api, Resource, reqparse
from functools import wraps
from flask import jsonify, current_app
from authlib.integrations.flask_oauth2 import ResourceProtector, current_token
from authlib.oauth2.rfc6750 import BearerTokenValidator
from authlib.jose import jwt, JsonWebKey
from datetime import datetime
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

class Token:

    def __init__(self, active, exp=None, scope=None, client_id=None, **kwargs):
        self.active = active
        self.exp = exp
        self.scope = scope
        self.client_id = client_id

    @property
    def revoked(self):
        return not self.active

    def get_scope(self):
        return self.scope

    def get_expires_at(self):
        return self.exp

    def check_client_id(self, client_id: str):
        return self.client_id == client_id

class MyBearerTokenValidator(BearerTokenValidator):

    def authenticate_token(self, token_string):

        url = 'https://hydra.o-g.at/oauth2/introspect'
        data = {'token': token_string, 'token_type_hint': 'access_token'}
        auth = (current_app.config['OAUTH_CLIENT_ID'], current_app.config['OAUTH_CLIENT_SECRET'])
        resp = requests.post(url, data=data, auth=auth)
        resp.raise_for_status()
        tmp = resp.json()
        print(tmp)
        token = Token(**tmp)
        if not token.check_client_id(current_app.config['OAUTH_CLIENT_ID']):
            #invalid client id
            return None
        return token

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
