from flask_restful import Resource, reqparse

from models.Category import Category


class CategoryEdit(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'name',
        type=str,
        required=True,
        help="This field cannot be left blank!")

    def get(self, category_id: int):
        """
        Get a category
        ---
        tags:
          - category
        parameters:
          - in: path
            name: category_id
            type: integer
            required: true
            description: Numeric ID of the category to get
        responses:
          200:
            description: Returns a category by id
          404:
            description: Category not exist
        """
        return Category.query.get_or_404(category_id).json()

    def put(self, category_id):
        """
        update a category
        ---
        tags:
          - category
        parameters:
          - in: path
            name: category_id
            type: integer
            required: true
            description: Numeric ID of the category to get
          - in: body
            name: body
            schema:
              id: Category
              required:
                - name
              properties:
                name:
                  type: string
                  description: name of category
        responses:
          200:
            description: Returns updated category
          404:
            description: Category not exist
        """
        category = Category.query.get_or_404(category_id)
        data = CategoryEdit.parser.parse_args()

        category.name = data["name"]

        category.save_to_db()
        return category.json()

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


class CategoryList(Resource):
    def get():
        """
        Get a list of category
        ---
        tags:
          - category
        responses:
          200:
            description: Returns a list of category
        """
        return [cat.json() for cat in Category.query.filter_by(activ=True).all()]

  
    def post(self, category_id):
        """
        create a category
        ---
        tags:
          - category
        parameters:
          - in: body
            name: body
            schema:
              id: Category
              required:
                - name
              properties:
                name:
                  type: string
                  description: name of category
        responses:
          200:
            description: Returns updated category
        """
        category = Category.query.get_or_404(category_id)
        data = CategoryEdit.parser.parse_args()

        category.name = data["name"]

        category.save_to_db()
        return category.json()
