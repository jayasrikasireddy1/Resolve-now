from flask import Blueprint, request, jsonify
from models import User, Complaint
from database import db

main = Blueprint('main', __name__)

@main.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(username=data['username'], password=data['password'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'User registered'}), 201

@main.route('/complaint', methods=['POST'])
def file_complaint():
    data = request.get_json()
    complaint = Complaint(user_id=data['user_id'], subject=data['subject'], description=data['description'])
    db.session.add(complaint)
    db.session.commit()
    return jsonify({'message': 'Complaint submitted'}), 201

@main.route('/complaints/<int:user_id>', methods=['GET'])
def get_complaints(user_id):
    complaints = Complaint.query.filter_by(user_id=user_id).all()
    return jsonify([{'subject': c.subject, 'status': c.status} for c in complaints])