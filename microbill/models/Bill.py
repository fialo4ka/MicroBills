from db import db
from .User import User
from .Category import Category
from flask_sqlalchemy import SQLAlchemy, orm
from sqlalchemy import func, and_
from datetime import datetime

def dump_datetime(value):
    """Deserialize datetime object into string form for JSON processing."""
    if value is None:
        return None
    return value.strftime("%Y-%m-%d")

class Bill(db.Model):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'user_id',
        type=int,
        required=True,
        help="This field cannot be left blank!")
    parser.add_argument(
        'category_id',
        type=int,
        required=True,
        help="This field cannot be left blank!")
    parser.add_argument(
        'amount',
        type=int,
        required=True,
        help="This field cannot be left blank!")
    parser.add_argument(
        'date',
        type=int,
        required=False,
        help="date of the bill")

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id))
    category_id = db.Column(db.Integer, db.ForeignKey(Category.id))
    amount = db.Column(db.Float(precision=2))
    date = db.Column(db.Date, default=datetime.now)
    date_update = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    def __init__(self, user_id, category_id, amount, date):
        self.user_id = user_id
        self.caregory_id = category_id
        self.amount = amount
        self.date = date

    def json(self):
        return {'user_id': self.user_id,
                #'user_name': self.user.name, 
                'category_id': self.category_id,
                #'category_name': self.category.name,
                'amount': self.amount, 
                'date': dump_datetime(self.date), 
                'date_update': self.date_update}
    
    def json_list(self, date):
        return {'bills': [bill.json() for bill in cls.query.filter_by(date=date)]}


    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(date=id) 

    def add_to_db(self):
        db.session.add(self)
        db.session.commit()

    def save_to_db(self):
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
