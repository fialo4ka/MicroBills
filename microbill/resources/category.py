from flask_restful import Resource, reqparse

from models.CategoryModel import CategoryModel


class Category(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'name',
        type=str,
        required=True,
        help="This field cannot be left blank!")

    def post(self):
        data = CategoryRegister.parser.parse_args()

        if CategoryModel.find_by_name(data['name']):
            return {
                'message':
                f"A category with name '{data['name']}' already exists."
            }, 400

        category = CategoryModel(**data)  
        category.save_to_db()
        return {"message": "Category created successfully."}, 201

    def delete(self):
        data = CategoryRegister.parser.parse_args()
        category = CategoryModel.find_by_name(data['name'])

        if category:
            category.delete_from_db()

        return {'message': 'Category deleted'}


class CategoryList(Resource):

    @classmethod
    def get(cls):
        return {'category': [category.json() for category in CategoryModel.query.filter_by(activ=True).all()]}