export interface CropModel {
  id: string;
  title: string;
  description: string;
  crop: string;
  tags: ModelTag[];
  accuracy: number;
  downloads: number;
  lastUpdated: string;
  modelFile: string;
  author: string;
  version: string;
  imageUrl?: string;
  appLink?: string;
  modelLink?: string;
}

export type ModelTag = 
  | 'Verified' 
  | 'Community' 
  | 'New' 
  | 'Popular' 
  | 'Research' 
  | 'Production Ready'
  | 'Offline First'
  | 'Our Solution'
  | 'Multi‑Crop'
  | 'Flutter'
  | 'Template'
  | 'Android'
  | 'TFLite'
  | 'Cassava'
  | 'Fertilizer'
  | 'Web App'
  | 'ViT'
  | 'Mobile'
  | 'Hyperspectral'
  | 'ICPR';


export type CropType = 
  | 'All Crops'
  | 'Maize'
  | 'Wheat'
  | 'Rice'
  | 'Tomato'
  | 'Potato'
  | 'Beans'
  | 'Cassava'
  | 'Coffee'
  | 'Cotton'
  | 'Soybean';

export interface FilterState {
  searchQuery: string;
  selectedCrop: CropType;
}