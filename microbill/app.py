from flask import Flask, jsonify
from flask_restful import Api

from flask_swagger import swagger
from flask_swagger_ui import get_swaggerui_blueprint

#from security import authenticate, identity
from resources.user import UserList, UserResource
from resources.category import CategoryEdit, CategoryList
from resources.bill import BillEdit, BillList


'''This is section 4 app.py file.'''
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'secret'
api = Api(app)
SWAGGER_URL = '/api/docs'  # URL for exposing Swagger UI (without trailing '/')
API_URL = '/spec'  # Our API url (can of course be a local resource)



@app.route("/spec")
def spec():
    swag = swagger(app)
    swag['info']['version'] = "1.0"
    swag['info']['title'] = "My API"
    return jsonify(swag)


@app.before_first_request
def create_tables():
    db.create_all()


# Adding /auth end point:
#jwt = JWT(app, authenticate, identity)


api.add_resource(UserList, '/users')
api.add_resource(UserResource, '/user/<int:user_id>')
api.add_resource(CategoryList, '/categories')
api.add_resource(BillList, '/bills')

api.add_resource(CategoryEdit, '/category/<int:category_id>')
api.add_resource(BillEdit, '/bill/<int:bill_id>')



swaggerui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,  # Swagger UI static files will be mapped to '{SWAGGER_URL}/dist/'
    API_URL,
    config={  # Swagger UI config overrides
        'app_name': "Test application"
    },
    # oauth_config={  # OAuth config. See https://github.com/swagger-api/swagger-ui#oauth2-configuration .
    #    'clientId': "your-client-id",
    #    'clientSecret': "your-client-secret-if-required",
    #    'realm': "your-realms",
    #    'appName': "your-app-name",
    #    'scopeSeparator': " ",
    #    'additionalQueryStringParams': {'test': "hello"}
    # }
    )

app.register_blueprint(swaggerui_blueprint)



# Name is only set to main when file is explicitly run (not on imports):
if __name__ == '__main__':
    from db import db
    db.init_app(app)
    app.run(port=5100, debug=True)
