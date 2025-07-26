import { useState } from 'react';
import { Book, Code, Play, Users, AlertCircle, CheckCircle, ExternalLink, Copy, Leaf } from 'lucide-react';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [copiedCode, setCopiedCode] = useState('');

  const copyToClipboard = (code: string, id: string) => {
  navigator.clipboard.writeText(code);
  setCopiedCode(id);
  setTimeout(() => setCopiedCode(''), 2000);
};

  const tabs = [
    { id: 'getting-started', label: 'Getting Started', icon: Play },
    { id: 'api-reference', label: 'API Reference', icon: Code },
    { id: 'models', label: 'Models', icon: Leaf },
    { id: 'examples', label: 'Examples', icon: Book },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: AlertCircle }
  ];

  const apiExamplePython = `import requests
import base64

# API endpoint
url = "https://api.cropai.com/v1/predict"

# Your API key
api_key = "your_api_key_here"

# Encode image to base64
with open("crop_image.jpg", "rb") as image_file:
    encoded_image = base64.b64encode(image_file.read()).decode()

# Prepare request
headers = {
    "Authorization": f"Bearer {api_key}",
    "Content-Type": "application/json"
}

data = {
    "image": encoded_image,
    "crop_type": "tomato",
    "model_id": "tomato-disease-v2"
}

# Make prediction
response = requests.post(url, json=data, headers=headers)
result = response.json()

print(f"Disease: {result['prediction']}")
print(f"Confidence: {result['confidence']}")
print(f"Treatment: {result['treatment_suggestion']}")`;

  const apiExampleJavaScript = `const predictDisease = async (imageFile, cropType) => {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('crop_type', cropType);
  formData.append('model_id', 'tomato-disease-v2');

  try {
    const response = await fetch('https://api.cropai.com/v1/predict', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer your_api_key_here'
      },
      body: formData
    });

    const result = await response.json();
    
    return {
      disease: result.prediction,
      confidence: result.confidence,
      treatment: result.treatment_suggestion,
      severity: result.severity_level
    };
  } catch (error) {
    console.error('Prediction failed:', error);
    throw error;
  }
};

// Usage
const fileInput = document.getElementById('crop-image');
const result = await predictDisease(fileInput.files[0], 'tomato');`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex items-center mb-4">
            <Book className="h-8 w-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Documentation</h1>
          </div>
          <p className="text-xl text-gray-600">
            Everything you need to integrate CropAI models into your applications
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <nav className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-3 py-2 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'getting-started' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started</h2>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Start</h3>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                      <li>Sign up for a CropAI account to get your API key</li>
                      <li>Choose a model from our verified collection</li>
                      <li>Install the required dependencies for your platform</li>
                      <li>Make your first API call to detect crop diseases</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900">Prerequisites</h4>
                        <p className="text-blue-800 mt-1">
                          You'll need an active internet connection and images of crops in JPG, PNG, or WebP format (max 10MB).
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Installation</h3>
                    <div className="bg-gray-100 rounded-lg p-4 relative">
                      <code className="text-sm font-mono text-gray-800">
                        pip install cropai-sdk requests pillow
                      </code>
                      <button
                        onClick={() => copyToClipboard('pip install cropai-sdk requests pillow', 'install')}
                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'api-reference' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">API Reference</h2>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Base URL</h3>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <code className="text-sm font-mono">https://api.cropai.com/v1/</code>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Authentication</h3>
                    <p className="text-gray-700 mb-4">
                      All API requests require authentication using your API key in the Authorization header:
                    </p>
                    <div className="bg-gray-100 rounded-lg p-4">
                      <code className="text-sm font-mono">Authorization: Bearer YOUR_API_KEY</code>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">POST /predict</h3>
                    <p className="text-gray-700 mb-4">Predict crop diseases from an image</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Request Body</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border border-gray-200">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-2 text-left border-b">Parameter</th>
                            <th className="px-4 py-2 text-left border-b">Type</th>
                            <th className="px-4 py-2 text-left border-b">Required</th>
                            <th className="px-4 py-2 text-left border-b">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 border-b font-mono text-sm">image</td>
                            <td className="px-4 py-2 border-b">string</td>
                            <td className="px-4 py-2 border-b">Yes</td>
                            <td className="px-4 py-2 border-b">Base64 encoded image</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border-b font-mono text-sm">crop_type</td>
                            <td className="px-4 py-2 border-b">string</td>
                            <td className="px-4 py-2 border-b">Yes</td>
                            <td className="px-4 py-2 border-b">Type of crop (tomato, maize, rice, etc.)</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border-b font-mono text-sm">model_id</td>
                            <td className="px-4 py-2 border-b">string</td>
                            <td className="px-4 py-2 border-b">No</td>
                            <td className="px-4 py-2 border-b">Specific model to use (defaults to latest)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2 mt-6">Response</h4>
                    <div className="bg-gray-100 rounded-lg p-4 relative">
                      <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap">{`{
  "prediction": "Early Blight",
  "confidence": 0.94,
  "severity_level": "moderate",
  "treatment_suggestion": "Apply copper-based fungicide",
  "affected_area_percentage": 15,
  "model_version": "tomato-disease-v2.1"
}`}</pre>
                      <button
                        onClick={() => copyToClipboard(`{
  "prediction": "Early Blight",
  "confidence": 0.94,
  "severity_level": "moderate",
  "treatment_suggestion": "Apply copper-based fungicide",
  "affected_area_percentage": 15,
  "model_version": "tomato-disease-v2.1"
}`, 'response')}
                        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'models' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Models</h2>
                  
                  <div className="grid gap-6">
                    {[
                      { crop: 'Tomato', modelId: 'tomato-disease-v2', diseases: ['Early Blight', 'Late Blight', 'Leaf Mold', 'Septoria Leaf Spot'], accuracy: '94%' },
                      { crop: 'Maize', modelId: 'maize-disease-v1', diseases: ['Northern Corn Leaf Blight', 'Common Rust', 'Gray Leaf Spot'], accuracy: '91%' },
                      { crop: 'Rice', modelId: 'rice-disease-v1', diseases: ['Bacterial Leaf Blight', 'Brown Spot', 'Leaf Smut'], accuracy: '89%' },
                      { crop: 'Cassava', modelId: 'cassava-disease-v1', diseases: ['Cassava Mosaic Disease', 'Brown Streak Disease'], accuracy: '92%' }
                    ].map((model, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">{model.crop} Disease Detection</h3>
                            <p className="text-gray-600 font-mono text-sm">Model ID: {model.modelId}</p>
                          </div>
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {model.accuracy} accuracy
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Detectable Diseases:</h4>
                          <div className="flex flex-wrap gap-2">
                            {model.diseases.map((disease, idx) => (
                              <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {disease}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'examples' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Code Examples</h2>
                  
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Python Example</h3>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <pre className="text-sm text-gray-100 overflow-x-auto">{apiExamplePython}</pre>
                      <button
                        onClick={() => copyToClipboard(apiExamplePython, 'python')}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                      >
                        {copiedCode === 'python' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">JavaScript Example</h3>
                    <div className="bg-gray-900 rounded-lg p-4 relative">
                      <pre className="text-sm text-gray-100 overflow-x-auto">{apiExampleJavaScript}</pre>
                      <button
                        onClick={() => copyToClipboard(apiExampleJavaScript, 'javascript')}
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-200"
                      >
                        {copiedCode === 'javascript' ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-yellow-900">Image Requirements</h4>
                        <ul className="text-yellow-800 mt-2 list-disc list-inside space-y-1">
                          <li>Maximum file size: 10MB</li>
                          <li>Supported formats: JPG, PNG, WebP</li>
                          <li>Recommended resolution: 224x224 to 1024x1024 pixels</li>
                          <li>Good lighting and focus for best results</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'troubleshooting' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Common Issues</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-700">Error 401: Unauthorized</h4>
                          <p className="text-gray-700 mt-1">Check that your API key is correct and included in the Authorization header.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-700">Error 400: Bad Request</h4>
                          <p className="text-gray-700 mt-1">Ensure your image is properly base64 encoded and the crop_type parameter is valid.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-700">Low Confidence Scores</h4>
                          <p className="text-gray-700 mt-1">Try improving image quality, lighting, and ensure the affected area is clearly visible.</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-red-700">Timeout Errors</h4>
                          <p className="text-gray-700 mt-1">Large images may take longer to process. Consider resizing images before uploading.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Best Practices</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Take photos in good natural lighting</li>
                        <li>Focus on the affected plant parts</li>
                        <li>Avoid blurry or low-resolution images</li>
                        <li>Include multiple angles if possible</li>
                        <li>Keep API keys secure and rotate them regularly</li>
                        <li>Implement proper error handling in your applications</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <div className="flex items-start">
                        <Users className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900">Need More Help?</h4>
                          <p className="text-blue-800 mt-1">
                            Join our community forum or contact our support team for additional assistance.
                          </p>
                          <div className="mt-3 space-x-4">
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                              Community Forum <ExternalLink className="h-4 w-4 inline ml-1" />
                            </button>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                              Contact Support <ExternalLink className="h-4 w-4 inline ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;