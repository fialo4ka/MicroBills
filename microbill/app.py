from flask import Flask
from flask_swagger_ui import get_swaggerui_blueprint

#from security import authenticate, identity
from .resources import api
from .db import db



'''This is section 4 app.py file.'''
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['RESTX_VALIDATE'] = True

app.config.from_env
var('MICROBILL_SETTINGS', silent=True)

SWAGGER_URL = '/api/docs'  # URL for exposing Swagger UI (without trailing '/')
API_URL = '/swagger.json'  # Our API url (can of course be a local resource)

api.init_app(app)
db.init_app(app)


@app.before_first_request
def create_tables():
    db.create_all()
    
@app.after_request
def add_header(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['access-control-allow-headers'] = 'Content-Type,api_key,Authorization'
    return response

# Adding /auth end point:
#jwt = JWT(app, authenticate, identity)

swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,  # Swagger UI static files will be mapped to '{SWAGGER_URL}/dist/'
    API_URL,
    config={  # Swagger UI config overrides
        'app_name': "Test application"
    },
    oauth_config={  # OAuth config. See https://github.com/swagger-api/swagger-ui#oauth2-configuration .
       'clientId': app.config["OAUTH_CLIENT_ID"],
       'clientSecret': app.config["OAUTH_CLIENT_SECRET"],
       'realm': "http://oauth.o-g.at",
       'appName': app.config["OAUTH_CLIENT_ID"],
       'scopeSeparator': " ",
       #'additionalQueryStringParams': {'test': "hello"}
    }
    )

app.register_blueprint(swaggerui_blueprint)
