from pydantic import BaseModel
from typing import Optional
from backend.firebase_config import db  # Firestore client
from datetime import datetime
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from backend.utils.predict import load_model_and_predict
from PIL import Image
import io

class ModelSubmission(BaseModel):
    name: str
    crop_type: str
    accuracy: float
    description: Optional[str] = None
    github_url: Optional[str] = None


app = FastAPI(
    title="CropAI Prediction API",
    version="1.0",
    description="API for predicting crop diseases using leaf images"
)

# Optional CORS setup for frontend/mobile integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MAX_FILE_SIZE_MB = 5

@app.get("/")
async def root():
    return {"message": "Welcome to CropAI Backend. Use /predict to get disease predictions."}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file.filename.lower().endswith((".jpg", ".jpeg", ".png")):
        raise HTTPException(status_code=400, detail="Invalid file type. Upload a JPG or PNG image.")

    try:
        contents = await file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
        predictions = load_model_and_predict(image)
        return {"predictions": predictions}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")
    
@app.post("/submit_model/")
async def submit_model(data: ModelSubmission):
    try:
        doc_ref = db.collection("model_submissions").document()
        doc_ref.set({
            "name": data.name,
            "crop_type": data.crop_type,
            "accuracy": data.accuracy,
            "description": data.description,
            "github_url": data.github_url,
            "submitted_at": datetime.utcnow().isoformat()
        })
        return {"message": "Model metadata submitted successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Submission failed: {str(e)}")
