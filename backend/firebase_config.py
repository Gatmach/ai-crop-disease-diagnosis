import firebase_admin
from firebase_admin import credentials, firestore

# Path to your service accoImport "firebase_admin" could not be resolvedPylanceunt key
cred = credentials.Certificate("backend/cropai-59b38-firebase-adminsdk-fbsvc-35dfd8acb5.json")

# Initialize Firebase app once
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

# Firestore DB client
db = firestore.client()
