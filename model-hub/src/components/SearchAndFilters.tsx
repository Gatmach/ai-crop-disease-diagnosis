import { Search } from 'lucide-react';
import { CropType } from '../types';
import { cropTypes } from '../data/mockData';

interface SearchAndFiltersProps {
  searchQuery: string;
  selectedCrop: CropType;
  onSearchChange: (query: string) => void;
  onCropChange: (crop: CropType) => void;
}

const SearchAndFilters = ({ 
  searchQuery, 
  selectedCrop, 
  onSearchChange, 
  onCropChange 
}: SearchAndFiltersProps) => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 min-w-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search models by name, disease, or description..."
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>

          {/* Crop Filter */}
          <div className="w-full sm:w-auto sm:min-w-[200px]">
            <select
              className="block w-full px-3 py-2.5 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              value={selectedCrop}
              onChange={(e) => onCropChange(e.target.value as CropType)}
            >
              {cropTypes.map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAndFilters;