import { useState } from "react";
import {
  Upload,
  GitBranch,
  CheckCircle,
  AlertTriangle,
  Users,
  Code,
  Database,
  Shield,
  ExternalLink,
  FileText,
  Star,
} from "lucide-react";

import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import toast from "react-hot-toast";

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidURL = (url: string): boolean => {
  return /^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/[\w-]+\/?$/.test(url);
};

const isValidPercentage = (value: string): boolean => {
  return /^(\d{1,3})(\.\d+)?%?$/.test(value);
};

const Contribute = () => {
  const currentStep = 1;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    modelName: "",
    cropType: "",
    description: "",
    accuracy: "",
    trainingDataSize: "",
    email: "",
    githubRepo: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      modelName,
      cropType,
      description,
      accuracy,
      trainingDataSize,
      email,
      githubRepo,
    } = formData;

    if (!modelName || modelName.length < 3) {
      toast.error("Model name must be at least 3 characters.");
      return;
    }

    if (!cropType) {
      toast.error("Please select a crop type.");
      return;
    }

    if (!description || description.length < 20) {
      toast.error("Description must be at least 20 characters.");
      return;
    }

    if (!accuracy || !isValidPercentage(accuracy)) {
      toast.error(
        "Accuracy must be a valid number or percentage (e.g., 92 or 92%)."
      );
      return;
    }

    if (!trainingDataSize || isNaN(Number(trainingDataSize))) {
      toast.error("Training data size must be a valid number.");
      return;
    }

    if (!email || !isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (githubRepo && !isValidURL(githubRepo)) {
      toast.error("Please enter a valid GitHub repository URL.");
      return;
    }

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "modelSubmissions"), {
        ...formData,
        submittedAt: Timestamp.now(),
      });

      toast.success("✅ Model submitted successfully!");

      setFormData({
        modelName: "",
        cropType: "",
        description: "",
        accuracy: "",
        trainingDataSize: "",
        email: "",
        githubRepo: "",
      });
    } catch (error) {
      console.error("Error submitting model:", error);
      toast.error("❌ Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const steps = [
    {
      number: 1,
      title: "Model Preparation",
      description: "Prepare and test your model",
    },
    {
      number: 2,
      title: "Documentation",
      description: "Create comprehensive documentation",
    },
    {
      number: 3,
      title: "Submission",
      description: "Submit your model for review",
    },
    {
      number: 4,
      title: "Review Process",
      description: "Community and expert review",
    },
    {
      number: 5,
      title: "Publication",
      description: "Model goes live on the hub",
    },
  ];

  const requirements = [
    {
      icon: Database,
      title: "Training Data",
      description: "Minimum 1000 labeled images per disease class",
      status: "required",
    },
    {
      icon: Star,
      title: "Accuracy",
      description: "Validation accuracy of at least 85%",
      status: "required",
    },
    {
      icon: Code,
      title: "Model Format",
      description: "TensorFlow, PyTorch, or ONNX format",
      status: "required",
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Complete model card and usage examples",
      status: "required",
    },
    {
      icon: Shield,
      title: "License",
      description: "Open source license (MIT, Apache 2.0, etc.)",
      status: "preferred",
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Hosted on GitHub with clear history",
      status: "preferred",
    },
  ];

  const cropTypes = [
    "Tomato",
    "Maize",
    "Rice",
    "Wheat",
    "Potato",
    "Cassava",
    "Cotton",
    "Sugarcane",
    "Soybean",
    "Barley",
    "Other (specify in description)",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Upload className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Contribute a Model
              </h1>
            </div>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Share your crop disease detection models with the global
              agricultural community
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Contribution Process
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white mb-3 ${
                    currentStep >= step.number ? "bg-green-600" : "bg-gray-300"
                  }`}
                >
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-24 h-0.5 bg-gray-300 transform translate-x-20 -translate-y-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Requirements */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Requirements
            </h2>
            <div className="space-y-4">
              {requirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-start">
                      <div
                        className={`p-2 rounded-lg mr-4 ${
                          req.status === "required"
                            ? "bg-red-100"
                            : "bg-blue-100"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            req.status === "required"
                              ? "text-red-600"
                              : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="font-semibold text-gray-900">
                            {req.title}
                          </h3>
                          <span
                            className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                              req.status === "required"
                                ? "bg-red-100 text-red-700"
                                : "bg-blue-100 text-blue-700"
                            }`}
                          >
                            {req.status}
                          </span>
                        </div>
                        <p className="text-gray-600">{req.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submission Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Submit Your Model
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model Name *
                  </label>
                  <input
                    type="text"
                    name="modelName"
                    value={formData.modelName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="e.g., Advanced Tomato Disease Detector"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Crop Type *
                  </label>
                  <select
                    name="cropType"
                    value={formData.cropType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  >
                    <option value="">Select crop type</option>
                    {cropTypes.map((crop) => (
                      <option key={crop} value={crop}>
                        {crop}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Model Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="Describe your model, diseases it detects, training methodology, etc."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Validation Accuracy *
                    </label>
                    <input
                      type="text"
                      name="accuracy"
                      value={formData.accuracy}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="e.g., 92.5%"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Training Data Size *
                    </label>
                    <input
                      type="text"
                      name="trainingDataSize"
                      value={formData.trainingDataSize}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="e.g., 5000 images"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub Repository
                  </label>
                  <input
                    type="url"
                    name="githubRepo"
                    value={formData.githubRepo}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    placeholder="https://github.com/username/model-repo"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Link to your model repository (if available)
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-yellow-800">
                        <strong>Note:</strong> This form is for initial model
                        submission. You'll need to provide additional materials
                        including model files, documentation, and test results
                        via email or GitHub after submission.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Model for Review"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Guidelines Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Contribution Guidelines
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                Documentation Standards
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Complete model card with architecture details
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Dataset description and preprocessing steps
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Performance metrics and validation results
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Usage examples and API integration code
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Known limitations and ethical considerations
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                Quality Standards
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Reproducible results with provided code
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Cross-validation on diverse datasets
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Robust performance across different conditions
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Ethical data collection and usage
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  Clear licensing and attribution
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Review Process */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Review Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Review
              </h3>
              <p className="text-gray-600">
                Community members test your model and provide feedback on
                performance and usability.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Validation
              </h3>
              <p className="text-gray-600">
                Agricultural experts and AI specialists validate the model's
                accuracy and practical applicability.
              </p>
            </div>
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Final Approval
              </h3>
              <p className="text-gray-600">
                Approved models are published on the hub with full documentation
                and integration support.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Contribute?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join our growing community of researchers and developers making
            agricultural AI accessible to farmers worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Sample Submission
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Join Community Forum{" "}
              <ExternalLink className="h-4 w-4 inline ml-2" />
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does the review process take?
              </h3>
              <p className="text-gray-600">
                The review process typically takes 2-4 weeks, depending on the
                complexity of the model and current review queue. We'll keep you
                updated throughout the process.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I retain ownership of my model?
              </h3>
              <p className="text-gray-600">
                Yes, you retain full ownership and credit for your model. We
                simply host and distribute it under your chosen open source
                license to make it accessible to the agricultural community.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I update my model after publication?
              </h3>
              <p className="text-gray-600">
                Absolutely! We encourage model improvements. You can submit
                updates that will go through a streamlined review process and be
                versioned appropriately.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What if my model doesn't meet the accuracy threshold?
              </h3>
              <p className="text-gray-600">
                We'll provide detailed feedback to help you improve your model.
                You can resubmit once you've addressed the identified issues.
                We're here to help you succeed!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contribute;
