import { Download, Calendar, User, Star, ExternalLink } from "lucide-react";
import { CropModel, ModelTag } from "../types";

interface ModelCardProps {
  model: CropModel;
}


const getTagStyles = (tag: ModelTag): string => {
  const baseStyles =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  switch (tag) {
    case "Verified":
      return `${baseStyles} bg-green-100 text-green-800`;
    case "Community":
      return `${baseStyles} bg-blue-100 text-blue-800`;
    case "New":
      return `${baseStyles} bg-purple-100 text-purple-800`;
    case "Popular":
      return `${baseStyles} bg-orange-100 text-orange-800`;
    case "Research":
      return `${baseStyles} bg-gray-100 text-gray-800`;
    case "Production Ready":
      return `${baseStyles} bg-emerald-100 text-emerald-800`;
    default:
      return `${baseStyles} bg-gray-100 text-gray-800`;
  }
};

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}k`;
  }
  return num.toString();
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      {/* Model Image */}
      {model.imageUrl && (
        <div className="h-48 w-full rounded-t-lg overflow-hidden">
          <img
            src={model.imageUrl}
            alt={model.title}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>
      )}

      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {model.tags.map((tag, index) => (
            <span key={index} className={getTagStyles(tag)}>
              {tag}
            </span>
          ))}
        </div>

        {/* Title and Description */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {model.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {model.description}
        </p>

        {/* Metadata */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="font-medium text-gray-900">
                {model.accuracy}%
              </span>
              <span className="ml-1">accuracy</span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>{formatNumber(model.downloads)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span className="truncate">{model.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(model.lastUpdated)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="font-medium text-gray-900">{model.crop}</span>
            <span>v{model.version}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => window.open(model.modelFile, "_blank")}
            className="w-full bg-green-600 text-white px-4 py-2.5 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center font-medium"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Use This Model
          </button>

          {(model.modelLink || model.appLink) && (
            <div className="flex gap-2 mt-4">
              {model.modelLink && (
                <a
                  href={model.modelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md"
                >
                  Use This Model
                </a>
              )}
              {model.appLink && (
                <a
                  href={model.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
                >
                  Get App
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
