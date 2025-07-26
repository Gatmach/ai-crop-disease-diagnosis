import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import SearchAndFilters from "./components/SearchAndFilters";
import ModelGrid from "./components/ModelGrid";
import { useModelStore } from "./store/modelStore";
import About from "./pages/About.tsx";
import Contribute from "./pages/Contribute.tsx";
import Documentation from "./pages/Documentation.tsx";
import { Toaster } from 'react-hot-toast';

function Home() {
  const {
    searchQuery,
    selectedCrop,
    filteredModels,
    isLoading,
    setSearchQuery,
    setSelectedCrop,
  } = useModelStore();

  return (
    <>
      <HeroSection />
      <StatsSection />
      <SearchAndFilters
        searchQuery={searchQuery}
        selectedCrop={selectedCrop}
        onSearchChange={setSearchQuery}
        onCropChange={setSelectedCrop}
      />
      <ModelGrid models={filteredModels} isLoading={isLoading} />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <Toaster position="top-right" reverseOrder={false} />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-500 text-sm">
              <p>
                © 2024 CropAI Model Hub. Empowering agriculture with artificial
                intelligence.
              </p>
              <div className="mt-2 space-x-4">
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}


export default App;
