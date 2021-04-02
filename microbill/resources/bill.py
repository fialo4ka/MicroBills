#from flask_jwt import jwt_required
from flask_restful import Resource, reqparse
from models.Bill import Bill
from models.Category import Category
from models.User import User
from datetime import datetime


class BillEdit(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'amount',
        type=float,
        required=True,
        help="This field cannot be left blank!"
    )
    parser.add_argument(
        'caregory_id',
        type=int,
        required=True,
        help="Every bill needs a store caregory."
    )
    parser.add_argument(
        'user_id',
        type=int,
        required=True,
        help="Every bill needs a store user."
    )
    parser.add_argument(
        'date',
        type=datetime,
        required=True,
        help="Every bill needs a store date."
    )
    #@jwt_required()
    def get(self, date):
        bills = Bill.find_by_date(date)
        if bills:
            return bills.json_list(date)
        return {'message': 'Bill not found'}, 404

    def post(self, name):
        request_data = Bill.parser.parse_args()
        bill = Bill(name, **request_data)
        try:
            bill.save_to_db()
        except:
            return {'message': 'An error occurred inserting the bill.'}, 500

        return bill.json(), 201

    def delete(self, id):
        bill = Bill.find_by_id(id)
        if bill:
            bill.delete_from_db()
        return {'message': 'Bill deleted'}

    def put(self, id):
        request_data = Bill.parser.parse_args()
        bill = Bill.find_by_id(id)

        if bill is None:
            bill = Bill(**request_data)
        else:
            bill.amount = request_data['amount']
            bill.caregory_id = request_data['caregory_id']
            bill.user_id = request_data['user_id']
            bill.date = request_data['date']
            bill.date_update = date.today()
        bill.save_to_db()
        return bill.json()


class BillList(Resource):
    @classmethod
    def get(cls):
        return {'bills': [bil.json() for bil in Bill.query.all()]}
