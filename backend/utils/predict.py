import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model # type: ignore
import json
from PIL import Image
from pathlib import Path

# Load model and labels once
BASE_DIR = Path(__file__).resolve().parent.parent
MODEL_PATH = BASE_DIR / "model/mobilenetv2_cropai.keras"
CLASS_INDEX_PATH = BASE_DIR / "model/class_indices.json"

model = load_model(MODEL_PATH)

with open(CLASS_INDEX_PATH, "r") as f:
    index_to_class = json.load(f)

# Convert string keys to integers
index_to_class = {int(k): v for k, v in index_to_class.items()}

IMG_SIZE = (224, 224)

def load_model_and_predict(image: Image.Image):
    img = image.resize(IMG_SIZE)
    img_array = tf.keras.preprocessing.image.img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    preds = model.predict(img_array)[0]
    top_indices = preds.argsort()[-3:][::-1]

    return [
        {
            "label": index_to_class.get(int(i), "unknown"),
            "confidence": float(preds[i])
        }
        for i in top_indices
    ]
