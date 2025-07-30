#  Project Roadmap
Industrial Attachment – JHUB Africa (May – August, 2025)

> This roadmap outlines weekly milestones during the attachment project focused on building AI-powered crop disease diagnosis system.

---

#### Phase 1: Research & Dataset Collection (Week 1–2)
- [x] Literature review on Kenyan crop diseases
- [x] Define system goals and scope
- [x] Source PlantVillage dataset
- [x] Collect local image samples (maize, tomato, beans)

---

####  Phase 2: Preprocessing & Model Development (Week 3–4)
- [x] Normalize, label, and clean image data
- [x] Perform augmentation (OpenCV, TensorFlow, Albumentations)
- [x] Train MobileNetV2 CNN with 95%+ accuracy
- [x] Evaluate and tune model performance  
- [x] Convert trained model to TensorFlow Lite (.tflite)
---

####  PPhase 3: API & Backend Infrastructure (Week 5–6)
- [x] Build FastAPI-based prediction API
- [x] Connect API to model checkpoint
- [x] Deploy to Firebase or Render
- [x] Add Swagger/OpenAPI documentation

---

####  Phase 4: Model Hub & Web Portal (Week 7–8)
- [x] Design mockup of CropAI Web Platform (Model Hub)
- [x] Add filters (crop, region, size, accuracy)
- [x] List our default model + for partner models
- [x] Begin Firebase backend setup (Auth, Firestore, Storage)

---

####  Phase 5: Mobile App Integration (Week 9)
- [ ] Bundle core TFLite models in React Native app
- [x] Add camera input + Swahili/English toggle  
- [x] Implement SQLite-based diagnosis history
- [x] Add “Explore More Models” web view integration

---

####  Phase 6: Feedback Loop & Knowledge Layer (Week 10)
- [x] Refine UI layout and responsiveness across mobile and desktop
- [x] Add camera input + Swahili/English toggle  
- [x] Add crop and tag filtering logic
- [x] Deploy Model Hub to GitHub Pages or Vercel

---

####  Phase 7: Final Testing, Docs & Pitch (Week 10)
- [ ] Field test with farmers or extension officers  
- [ ] Finalize GitHub repo (README, API docs, model files)    
- [ ] Submit SDD PDF (group version)
- [ ] Prepare & present pitch deck to JHUB panel  
---

