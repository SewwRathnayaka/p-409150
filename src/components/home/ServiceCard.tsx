
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  iconUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
      <div className="flex items-center mb-4">
        <img src={iconUrl} alt={title} className="w-8 h-8 mr-3" />
        <h3 className="text-base font-semibold text-primary">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
      <button className="bg-accent text-white text-sm py-2 px-4 rounded-md hover:bg-secondary transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
