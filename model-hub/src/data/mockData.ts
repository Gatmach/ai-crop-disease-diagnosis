import { CropModel } from "../types";

export const mockModels: CropModel[] = [
  {
    id: "cropai-multi",
    title: "CropAI-Crop Disease Diagnosis",
    description:
      "Offline app diagnosing maize, tomato & bean diseases with bundled lightweight MobileNetV2 model and treatment suggestions.",
    crop: "Multi‑Crop",
    tags: ["Our Solution", "Offline First", "Verified", "TFLite", "Android"],
    accuracy: 94.7,
    downloads: 810,
    lastUpdated: "2025-07-22",
    version: "1.0.0",
    modelFile:
      "https://github.com/akechsmith/ai-crop-disease-diagnosis/raw/main/backend/model",
    appLink: "",
    author: "CropAI Team (JHUB Africa)",
    imageUrl:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400",
  },

  {
    id: "plantvillage-nuru",
    title: "PlantVillage Nuru",
    description:
      "Offline AI app diagnosing cassava mosaic, brown streak, maize fall armyworm, and more. Supports field guidance.",
    crop: "Multi‑Crop",
    tags: [
      "Verified",
      "Offline First",
      "Community",
      "Production Ready",
      "Mobile",
    ],
    accuracy: 90,
    downloads: 1000,
    lastUpdated: "2024-10-23",
    version: "14.1",
    modelFile: "",
    appLink: "https://play.google.com/store/apps/details?id=plantvillage.nuru",
    author: "Penn State University",
    imageUrl:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400",
  },
  {
    id: "plantdis-flutter",
    title: "PlantDis Detector App",
    description:
      "TFLite‑powered Flutter Android app detecting diseases in apple, corn, orange, potato & tomato via image upload.",
    crop: "Multi‑Crop",
    tags: ["Community", "Multi‑Crop", "Flutter"],
    accuracy: 90.0,
    downloads: 1200,
    lastUpdated: "2025-06-10",
    version: "1.0.0",
    modelFile: "https://github.com/spsaswat/plantdis?tab=readme-ov-file",
    appLink: "",
    author: "Saswat Panda & Ming‑dao Chia",
    imageUrl:
      "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=400",
  },
  {
    id: "plant‑diseases‑detector",
    title: "Plant Diseases Detector (Android)",
    description:
      "Android app template using TFLite for plant disease detection—end‑to‑end TF → APK example.",
    crop: "Multi‑Crop",
    tags: ["Template", "Android", "TFLite"],
    accuracy: 92.0,
    downloads: 800,
    lastUpdated: "2025-06-01",
    version: "1.0.0",
    modelFile:
      "https://www.tensorflow.org/hub/tutorials/cropnet_on_device?utm_source=chatgpt.com",
    appLink: "",
    author: "Yannick Serge Obam",
    imageUrl:
      "https://images.pexels.com/photos/5199274/pexels-photo-5199274.jpeg",
  },
  {
    id: "plantix",
    title: "Plantix – Your Crop Doctor",
    description:
      "AI app diagnosing pests, diseases & nutrient deficiencies across 30+ crops with treatment guidance.",
    crop: "Multi‑Crop",
    tags: ["Verified", "Popular", "Community", "Production Ready", "Mobile"],
    accuracy: 95,
    downloads: 10000000,
    lastUpdated: "2025-06-15",
    version: "latest",
    modelFile: "",
    appLink:
      "https://play.google.com/store/apps/details?id=com.peat.GartenBank",
    author: "PEAT GmbH",
    imageUrl:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
  },
  {
    id: "agrio",
    title: "Agrio – Plant Protection AI",
    description:
      "AI-driven plant doctor providing disease, pest & nutrient diagnoses plus satellite-based field alerts.",
    crop: "Multi‑Crop",
    tags: ["Verified", "Community", "Production Ready", "Mobile"],
    accuracy: 90,
    downloads: 0,
    lastUpdated: "2025-05-01",
    version: "latest",
    modelFile: "",
    appLink: "https://play.google.com/store/apps/details?id=com.agrio",
    author: "Agrio",
    imageUrl: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
  },
  {
    id: "agphd-corn-diseases",
    title: "Ag PhD Corn Diseases",
    description:
      "Mobile guide for diagnosing corn diseases in the U.S. and Canada—field-oriented visual reference.",
    crop: "Maize",
    tags: ["Community", "Research", "Mobile"],
    accuracy: 0,
    downloads: 5000,
    lastUpdated: "2024-08-09",
    version: "1.0",
    modelFile: "",
    appLink:
      "https://play.google.com/store/apps/details?id=com.agphd.corndiseases",
    author: "IFA Productions",
    imageUrl:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400",
  },

  {
    id: "mobileplantvit",
    title: "MobilePlantViT Model",
    description:
      "Hybrid Vision Transformer TFLite model for generalized plant disease classification across crops.",
    crop: "Multi‑Crop",
    tags: ["Research", "ViT", "Mobile"],
    accuracy: 95.0,
    downloads: 150,
    lastUpdated: "2025-03-20",
    version: "1.0.0",
    modelFile:
      "https://github.com/moshiurtonmoy/MobilePlantViT/releases/latest/download/model.tflite",
    appLink: "",
    author: "M. Rahman Tonmoy et al.",
    imageUrl:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400",
  },
  {
    id: "automated‑hyperspectral",
    title: "Hyperspectral Crop Disease",
    description:
      "ICPR‑winning solution diagnosing diseases via hyperspectral imaging—Python/Jupyter.",
    crop: "Multi‑Crop",
    tags: ["Research", "Hyperspectral", "ICPR"],
    accuracy: 0,
    downloads: 80,
    lastUpdated: "2024-08-31",
    version: "1.0.0",
    modelFile:
      "https://github.com/VanLinLin/Automated-Crop-Disease-Diagnosis-from-Hyperspectral-Imagery-3rd",
    appLink: "",
    author: "NCKU ACVLAB",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400",
  },
  {
    id: "plantpulse",
    title: "PlantPulse Disease Advisor",
    description:
      "Flutter disease detection app offering treatment tips, weather analytics & community chat support.",
    crop: "Multi‑Crop",
    tags: ["Community", "Flutter", "Android"],
    accuracy: 90.0,
    downloads: 220,
    lastUpdated: "2025-04-10",
    version: "1.0.0",
    modelFile: "https://github.com/prajwalpkp2106/Crop-Disease-Detection-App",
    appLink: "",
    author: "Prajwal P.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
  },
];

export const cropTypes = [
  "All Crops",
  "Maize",
  "Wheat",
  "Rice",
  "Tomato",
  "Potato",
  "Beans",
  "Cassava",
  "Coffee",
  "Cotton",
  "Soybean",
] as const;
