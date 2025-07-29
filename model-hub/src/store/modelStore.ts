import { create } from 'zustand';
import { CropModel, FilterState, CropType } from '../types';
import { mockModels } from '../data/mockData';

interface ModelState extends FilterState {
  models: CropModel[];
  filteredModels: CropModel[];
  isLoading: boolean;
  setSearchQuery: (query: string) => void;
  setSelectedCrop: (crop: CropType) => void;
  filterModels: () => void;
}

export const useModelStore = create<ModelState>((set, get) => ({
  models: mockModels,
  filteredModels: mockModels,
  searchQuery: '',
  selectedCrop: 'All Crops',
  isLoading: false,

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().filterModels();
  },

  setSelectedCrop: (crop: CropType) => {
    set({ selectedCrop: crop });
    get().filterModels();
  },

  filterModels: () => {
    const { models, searchQuery, selectedCrop } = get();
    
    let filtered = models;

    // Filter by crop
    if (selectedCrop !== 'All Crops') {
      filtered = filtered.filter(model => model.crop === selectedCrop);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(model =>
        model.title.toLowerCase().includes(query) ||
        model.description.toLowerCase().includes(query) ||
        model.crop.toLowerCase().includes(query) ||
        model.author.toLowerCase().includes(query) ||
        model.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    set({ filteredModels: filtered });
  },
}));