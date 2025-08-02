import firebase_admin
from firebase_admin import credentials, firestore

# Path to your service account key
cred = credentials.Certificate("backend/cropai-d8e2e-firebase-adminsdk-fbsvc-cd238acae8.json")

# Initialize Firebase app once
if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)

# Firestore DB client
db = firestore.client()
