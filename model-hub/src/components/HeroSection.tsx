const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            AI Crop Disease
            <span className="text-green-600"> Model Hub</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover and deploy cutting-edge machine learning models for crop disease detection. 
            Access verified, community-contributed models to protect your harvests.
          </p>
          <div className="mt-8 flex justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <span>Production Ready Models</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Open Source Community</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 bg-purple-500 rounded-full mr-2"></div>
              <span>Research Backed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;