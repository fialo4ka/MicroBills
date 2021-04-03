#from flask_jwt import jwt_required
from flask_restful import Resource, reqparse
from models.Bill import Bill
from models.Category import Category
from models.User import User
from models.Months import Months
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


def take_date(month, year):
    return datetime(int(year), int(month), 1)

class BillListByUser(Resource):   
    @classmethod
    def get(cls, userid, month, year):
        if (month is None or year is None or year < 2019 or year >2030 or not(Months.has_key(month))):
            return []
        nextMonth = 1 if month+1 > 12 else month+1
        nextYear = year+1 if month+1 > 12 else year
        return {'bills': [bil.json() for bil in Bill.query
                                                    .filter_by(user_id=userid)
                                                    .filter(Bill.date >= take_date(month,year))
                                                    .filter(Bill.date < take_date(nextMonth,nextYear)).all()]
                }
                                                    

class BillListByMonth(Resource):   
    @classmethod
    def get(cls, month, year):
        if (month is None or year is None or year < 2019 or year >2030 or not(Months.has_key(month))):
            return []
        nextMonth = 1 if month+1 > 12 else month+1
        nextYear = year+1 if month+1 > 12 else year
        return {'bills': [bil.json() for bil in 
                Bill.query
                        .filter(Bill.date >= take_date(month,year))
                        .filter(Bill.date < take_date(nextMonth,nextYear)).all()]
                }