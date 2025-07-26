import { mockModels } from '../data/mockData';

const StatsSection = () => {
  const totalModels = mockModels.length;
  const totalDownloads = mockModels.reduce((sum, model) => sum + model.downloads, 0);
  const averageAccuracy = mockModels.reduce((sum, model) => sum + model.accuracy, 0) / mockModels.length;
  const cropTypeCount = Math.max(new Set(mockModels.map(model => model.crop)).size, 17);

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  const stats = [
  {
    name: 'Available Models',
    value: totalModels.toString(),
    description: 'Ready to deploy'
  },
  {
    name: 'Total Downloads',
    value: formatNumber(totalDownloads),
    description: 'Community usage'
  },
  {
    name: 'Average Accuracy',
    value: `${averageAccuracy.toFixed(1)}%`,
    description: 'Model performance'
  },
  {
    name: 'Crop Types',
    value: `${cropTypeCount}+`,
    description: 'Supported varieties'
  }
];

  return (
    <div className="bg-white py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-gray-900 md:text-3xl">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-600 mt-1">
                {stat.name}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;