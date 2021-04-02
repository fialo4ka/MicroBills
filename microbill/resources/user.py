from flask_restful import Resource, reqparse

from models.User import User

class UserList(Resource):

    @classmethod
    def get(cls):
        return {'user': [user.json() for user in User.query.all()]}
