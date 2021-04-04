#from flask_jwt import jwt_required
from flask_restx import Resource, Namespace, reqparse, fields
from flask import request
from sqlalchemy.sql.expression import extract
from datetime import datetime
from werkzeug.exceptions import BadRequest
from typing import Optional

from ..models.Bill import Bill
from ..models.Category import Category
from ..models.User import User
from .api import api


api = Namespace("bills", description="Bill related operations")

bill = api.model('Bill', {
    'amount': fields.Integer(required=True, description='Amount'),
    'caregory_id': fields.Integer(required=True, description='category'),
    'user_id': fields.Integer(required=True, description='user'),
    'date': fields.DateTime(required=False, description='date'),
})


@api.route("/<int:bill_id>")
@api.doc(
    responses={404: "Bill not found"},
    params={"bill_id": "The Bill ID"})
class BillResource(Resource):

    @api.marshal_with(bill, code=201)
    def get(self, bill_id):
        """
        Get a list of all bills
        """
        bills = Bill.find_by_date(date)
        if bills:
            return bills.json_list(date)
        return {'message': 'Bill not found'}, 404

    @api.expect(bill)
    @api.marshal_with(bill, code=201)
    def put(self, bill_id):
        """
        Get a list of all bills
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

@api.route("")
class BillList(Resource):
    

    @api.param("userid", "The user identifier")
    @api.param("categoryid", "The user identifier")
    @api.param("month", "month, requires year")
    @api.param("year", "year")
    def get(self, userid: Optional[int] = None, categoryid: Optional[int] = None,
            month: Optional[int] = None, year: Optional[int] = None ):
        """
        Get a list of all bills
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
