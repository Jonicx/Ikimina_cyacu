from .app import  db
from sqlalchemy.sql import func


class AdminModel(db.Model):
    __tablename__ = 'Administrators'
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(100), nullable=False)
    lastName = db.Column(db.String(100), nullable=False)
    username = db.Column(db.String(100), nullable=False,unique=True)
    password = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False,unique=True)
    phoneNumber = db.Column(db.String(12), nullable=False,unique=True)
    createdAt = db.Column(db.DateTime(), server_default=func.now())
    updatedAt = db.Column(db.DateTime(), onupdate=func.now())
    lastLogin = db.Column(db.DateTime(), nullable=True)


class MemberModel(db.Model):
    __tablename__ = 'Members'
    id = db.Column(db.Integer, primary_key=True)
    memberId = db.Column(db.String(10), unique=True)
    firstName = db.Column(db.String(100), nullable=False)
    lastName = db.Column(db.String(100), nullable=False)
    phoneNumber = db.Column(db.String(12), nullable=False)
    parentMemberId = db.Column(db.String(10), nullable=False)
    createdAt = db.Column(db.DateTime(), server_default=func.now())
    updatedAt = db.Column(db.DateTime(), onupdate=func.now())


class LogsModel(db.Model):
    __tablename__ = 'Logs'
    id = db.Column(db.Integer, primary_key=True)
    adminId = db.Column(db.String(10), unique=True)
    activity = db.Column(db.Enum("AUTH","CREATE","UPDATE"), nullable=False)
    details = db.Column(db.String(100),nullable=False)
    timestamp = db.Column(db.DateTime(), server_default=func.now())


# db.create_all()

