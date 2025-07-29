import { Leaf, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path: string) =>
    location.pathname === path
      ? "bg-green-600 text-white"
      : "text-gray-600 hover:text-gray-900";

  const navItems = [
    { label: "Models", path: "/" },
    { label: "Contribute", path: "/contribute" },
    { label: "About", path: "/about" },
    { label: "Documentation", path: "/docs" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                CropAI
              </span>
              <span className="ml-2 text-sm font-medium text-gray-500 hidden sm:inline">
                Model Hub
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(
                  "/"
                )}`}
              >
                Models
              </Link>
              <Link
                to="/contribute"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(
                  "/contribute"
                )}`}
              >
                Contribute
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(
                  "/about"
                )}`}
              >
                About
              </Link>
              <Link
                to="/docs"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(
                  "/docs"
                )}`}
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 md:hidden">
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(
                path
              )}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
