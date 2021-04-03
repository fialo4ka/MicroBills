from flask_restful import Resource, reqparse

from models.User import User


class UserResource(Resource):

    def get(self, user_id: int):
        """
        Get a user
        ---
        tags:
          - users
        parameters:
          - in: path
            name: user_id
            type: integer
            required: true
            description: Numeric ID of the user to get
        responses:
          200:
            description: Returns a user
        """
        return User.query.get_or_404(user_id)

class UserList(Resource):

    def get():
        """
        Get a list of users
        ---
        tags:
          - users
        responses:
          200:
            description: Returns a list of users
        """
        return [user.json() for user in User.query.all()]
