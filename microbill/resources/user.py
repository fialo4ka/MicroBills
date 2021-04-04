from flask_restx import Resource, Namespace, reqparse, fields

from ..models.User import User


api = Namespace("users", description="User related operations")

user = api.model('User', {
    'id': fields.Integer(required=True, description="The user identifier"),
    'name': fields.String(required=True, description='Amount'),
})


@api.doc(params={'user_id': 'An ID'})
@api.route("/<int:user_id>")
class UserResource(Resource):

    @api.doc(responses={404: 'Not Found'})
    @api.marshal_with(user)
    def get(self, user_id: int):
        return User.query.get_or_404(user_id)


@api.route("")
class UserList(Resource):

    @api.marshal_list_with(user)
    def get(self):
        """
        Get a list of users
        """
        return User.query.all()
