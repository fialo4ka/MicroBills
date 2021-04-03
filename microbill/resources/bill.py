#from flask_jwt import jwt_required
from flask_restful import Resource, reqparse
from flask import request
from sqlalchemy.sql.expression import extract
from models.Bill import Bill
from models.Category import Category
from models.User import User
from datetime import datetime
from werkzeug.exceptions import BadRequest
from typing import Optional


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

    def get(self, date):
        """
        Get a list of all bills
        ---
        tags:
          - bills
        parameters:
          - in: path
            name: bill_id
            type: integer
            required: true
            description: Numeric ID of the category to get
        """
        bills = Bill.find_by_date(date)
        if bills:
            return bills.json_list(date)
        return {'message': 'Bill not found'}, 404

    def put(self, bill_id):
        """
        Get a list of all bills
        ---
        tags:
          - bills
        parameters:
          - in: path
            name: bill_id
            type: integer
            required: true
            description: Numeric ID of the category to get
          - in: body
            name: body
            schema:
              id: Bill
              required:
                - name
              properties:
                name:
                  type: string
                  description: name of category
        """
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

class BillList(Resource):
    
    def get(userid: Optional[int] = None, categoryid: Optional[int] = None,
            month: Optional[int] = None, year: Optional[int] = None ):
        """
        Get a list of all bills
        ---
        tags:
          - bills
        parameters:
          - in: query
            name: userid
            type: integer
            required: false
            description: Numeric ID of the user to get
          - in: query 
            name: categoryid
            type: integer
            required: false
            description: Numeric ID of the year to get
          - in: query
            name: month
            type: integer
            required: false
            description: Numeric ID of the month to get
          - in: query 
            name: year
            type: integer
            required: false
            description: Numeric ID of the year to get
        responses:
          200:
            description: Returns a list of users
        """
        query = Bill.query
        args = request.args
        if ("userid" in args):
            query = query.filter_by(user_id=args["userid"])
        if ("categoryid" in args):
            query = query.filter_by(category_id=args["categoryid"])

        if "month" in args and "year" not in args:
            return BadRequest("year not set")

        if ("year" in args):
            query =  query.filter(extract("year", Bill.date) == args["year"])
            if ("month" in args):
                query =  query.filter(extract("month", Bill.date) == args["month"])
        return [bil.json() for bil in query.all()]

    
    def post(self):
        """
        create a new bills
        ---
        tags:
          - bills
        parameters:
          - in: body
            name: body
            schema:
              id: Bill
              required:
                - name
              properties:
                name:
                  type: string
                  description: name of category
        """
        request_data = Bill.parser.parse_args()
        bill.amount = request_data['amount']
        bill.caregory_id = request_data['caregory_id']
        bill.user_id = request_data['user_id']
        bill.date = request_data['date']
        bill.date_update = date.today()
        bill.add_to_db()
        return bill.json()
