from ..db import db
from datetime import datetime

class Category(db.Model):
    __tablename__ = 'Category'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(250))
    activ = db.Column(db.Boolean)
    date_update = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    bills = db.relationship('Bill', backref='category', lazy='dynamic')

    def __init__(self, name):
        self.name = name
        self.activ = True

    def json(self):
        return {'id': self.id,
                'name': self.name
                }

    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    def add_to_db(self):
        db.session.add(self)
        db.session.commit()

    def save_to_db(self):
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
