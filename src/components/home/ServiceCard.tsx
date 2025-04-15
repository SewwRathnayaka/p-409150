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
        <img src={iconUrl} alt={title} className="w-12 h-12 mr-4" />
        <h3 className="text-xl font-bold text-[#14B22D]">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-[#F6AC3D] text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default ServiceCard;
