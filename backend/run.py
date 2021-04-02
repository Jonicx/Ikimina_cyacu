from flask import Flask
from flask_restful import Api, Resource, abort,reqparse
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError
from sqlalchemy.sql import func
from werkzeug.security import generate_password_hash,check_password_hash
import re
import jwt
import datetime

app = Flask(__name__)
api = Api(app)
app.config['SECRET_KEY'] = '!9m@S-dThyIlW[pHQbN^'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db/ujamaDB.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


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

    @staticmethod
    def generate_hash(password):
        return generate_password_hash(password, method='sha256')

    @staticmethod
    def verify_hash(password, hash_):
        return check_password_hash(hash_,password)


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


db.create_all()


class RegisterAdmin(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('firstName',type=str,required=True, help="First name cannot be blank!")
        parser.add_argument('lastName',type=str,required=True, help="Last name cannot be blank!")
        parser.add_argument('username',type=str,required=True,help="Username cannot be blank!")
        parser.add_argument('password',type=str,required=True,help="Password cannot be blank!")
        parser.add_argument('email',type=str,required=True,help="Email cannot be blank!")
        parser.add_argument('phoneNumber',type=str,required=True,help="Phone number cannot be blank!")
        args = parser.parse_args()

        hashed_password = generate_password_hash(args['password'], method='sha256')
        if not re.match(r"^[A-Za-z0-9\.\+_-]+@[A-Za-z0-9\._-]+\.[a-zA-Z]*$", args['email']):
            abort(404,message="Invali email address")

        try:
            newAdmin = AdminModel(
                firstName=args['firstName'],
                lastName=args['lastName'],
                username=args['username'],
                password=hashed_password,
                email=args['email'],
                phoneNumber=args['phoneNumber']
            )
            db.session.add(newAdmin)
            db.session.commit()
        except IntegrityError:
            db.session.rollback()
            return {"message": f"Admin with username: {args['username']} or email: {args['email']}, already exists!"},400
        return {"message":"Admin Created"},200


class LoginAdmin(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username',type=str,required=True, help="Username cannot be blank!")
        parser.add_argument('password',type=str,required=True, help="Please enter password")
        parser.add_argument('ip',type=str,required=True, help="Please Provide IP Address")
        args = parser.parse_args()

        exists = AdminModel.query.filter_by(username=args['username']).first()
        if not exists : return {"message":f"User {args['username']} doesn\'t exist"},404

        if check_password_hash(exists.password,args['password']):
            try:
                recordLog = LogsModel(
                    adminId=exists.id,
                    activity="AUTH",
                    details=f"Login via IP: {args['ip']}"
                )
                db.session.add(recordLog)
                db.session.commit()
            except IntegrityError:
                db.session.rollback()
                return {"message":"Can't login, Database log record error"},500

            encodedJWT = jwt.encode((
                {
                "username":exists.username,
                "firstName":exists.firstName,
                "lastName":exists.lastName,
                "email":exists.email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
            'iat': datetime.datetime.utcnow(),}),"secret", algorithm="HS256")

            return {"message":"Login OK","token": encodedJWT},200
        return{"message":"Wrong Details"},400

api.add_resource(RegisterAdmin, "/auth/admin/register")
api.add_resource(LoginAdmin, "/auth/admin/login")


if __name__ == '__main__':
    app.run(debug=True)
