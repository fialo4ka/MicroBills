from flask_restx import Resource, Namespace, reqparse, fields

from ..models.Category import Category


api = Namespace("categories", description="Category related operations")


category = api.model('Category', {
    'id': fields.Integer(required=True, description="The category identifier"),
    'name': fields.String(required=True, description='Amount'),
})


parser = api.parser()
parser.add_argument(
    "name", type=str, required=True, help="Category name", location="form"
)

@api.route("/<int:category_id>")
class CategoryEdit(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'name',
        type=str,
        required=True,
        help="This field cannot be left blank!")

    @api.marshal_with(category)
    def get(self, category_id: int):
        """
        Get a category
        """
        return Category.query.get_or_404(category_id).json()

    @api.marshal_with(category)
    @api.doc(parser=parser)
    def put(self, category_id):
        """
        update a category
        """
        category = Category.query.get_or_404(category_id)
        data = CategoryEdit.parser.parse_args()

        category.name = data["name"]

        category.save_to_db()
        return category

    def delete(self):
        data = CategoryEdit.parser.parse_args()
        category = Category.find_by_name(data['name'])

        if not category:
            return {
                'message':
                f"A category with name '{data['name']}' does not exists."
            }, 400
        category.activ = False
        category.save_to_db()

        return {'message': 'Category deleted'}


@api.route("")
class CategoryList(Resource):
    @api.marshal_list_with(category)
    def get(self):
        """
        Get a list of category
        """
        return Category.query.filter_by(activ=True).all()

  
    @api.marshal_with(category)
    @api.doc(parser=parser)
    def post(self, category_id):
        """
        create a category
        """
        category = Category.query.get_or_404(category_id)
        data = CategoryEdit.parser.parse_args()

        category.name = data["name"]

        category.save_to_db()
        return category
