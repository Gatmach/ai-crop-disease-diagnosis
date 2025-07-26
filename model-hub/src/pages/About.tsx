import { Leaf, Users, Brain, Globe, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-green-100 rounded-full mr-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About CropAI Model Hub
            </h1>
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              The CropAI Model Hub is part of the larger CropAI Ecosystem. It
              serves as a centralized repository of verified,
              community-contributed, and AI-powered plant disease detection
              models.
            </p>
            <p className="text-lg text-gray-600">
              This hub helps farmers, researchers, and developers explore and
              integrate cutting-edge models for crops such as maize, tomato,
              rice, cassava, and more.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            To democratize access to advanced agricultural AI technology,
            empowering farmers worldwide with intelligent crop disease detection
            tools that improve yield, reduce losses, and promote sustainable
            farming practices.
          </p>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-blue-100 rounded-full w-fit mb-4">
              <Brain className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI-Powered Detection
            </h3>
            <p className="text-gray-600">
              Advanced machine learning models trained on thousands of crop
              images to accurately identify diseases and pests across multiple
              crop types.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-green-100 rounded-full w-fit mb-4">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Community-Driven
            </h3>
            <p className="text-gray-600">
              Built by and for the agricultural community, with contributions
              from farmers, researchers, and developers worldwide.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-purple-100 rounded-full w-fit mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Verified Models
            </h3>
            <p className="text-gray-600">
              All models undergo rigorous testing and validation to ensure
              accuracy and reliability in real-world farming conditions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-yellow-100 rounded-full w-fit mb-4">
              <Globe className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Global Accessibility
            </h3>
            <p className="text-gray-600">
              Designed to work across different climates, regions, and farming
              practices, making AI accessible to farmers everywhere.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-red-100 rounded-full w-fit mb-4">
              <Zap className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Easy Integration
            </h3>
            <p className="text-gray-600">
              Simple APIs and comprehensive documentation make it easy to
              integrate our models into existing agricultural applications and
              workflows.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="p-3 bg-indigo-100 rounded-full w-fit mb-4">
              <Leaf className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Sustainable Focus
            </h3>
            <p className="text-gray-600">
              Promoting environmentally friendly farming practices through early
              disease detection and targeted treatment recommendations.
            </p>
          </div>
        </div>

        {/* Supported Crops */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">
            Supported Crops
          </h2>
          <p className="text-center text-green-100 mb-8 text-lg">
            Our models currently support disease detection for these major crop
            types:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Maize</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Tomato</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Rice</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Cassava</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Wheat</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Potato</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Cotton</span>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <span className="font-semibold">Sugarcane</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join the CropAI Community
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're a farmer looking to protect your crops, a researcher
            developing new models, or a developer building agricultural
            solutions, CropAI Model Hub has something for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
            >
              Explore Models
            </Link>
            <Link
              to="/contribute"
              className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
            >
              Contribute Model
            </Link>
            <Link
              to="/docs"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
