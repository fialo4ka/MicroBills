from db import db


class BillModel(db.Model):
    __tablename__ = 'Bill'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('User.id'))
    user = db.relationship('UserModel')
    caregory_id = db.Column(db.Integer, db.ForeignKey('Category.id'))
    category = db.relationship('CategoryModel')
    amount = db.Column(db.Float(precision=2))
    date = db.Column(db.DateTime)
    date_update = db.Column(db.DateTime)

    def __init__(self, user_id, caregory_id, amount, date):
        self.name = name
        self.price = price
        self.store_id = store_id
        self.date = date

    def json(self):
        return {'user': self.user.name, 'category': self.category.name,'amount': self.amount, 'date': self.date, 'date_update': self.date_update}
    
    def json_list(self, date):
        return {'bills': [bill.json() for bill in cls.query.filter_by(date=date)]}


    @classmethod
    def find_by_date(cls, date):
        return cls.query.filter_by(date=date)

    def find_by_id(cls, id):
        return cls.query.filter_by(date=id)
        

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
