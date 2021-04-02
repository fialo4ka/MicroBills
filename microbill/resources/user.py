from flask_restful import Resource, reqparse

from models.UserModel import UserModel

class UserList(Resource):

    @classmethod
    def get(cls):
        return {'user': [user.json() for user in UserModel.query.all()]}
