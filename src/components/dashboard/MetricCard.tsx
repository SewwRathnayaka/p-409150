
import React from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  changeText?: string;
  changeAmount?: number;
  changeType?: "positive" | "negative" | "neutral";
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  changeText,
  changeAmount,
  changeType = "neutral",
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 flex flex-col gap-4 h-full">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        <div className="p-2 bg-[#14B22D]/10 rounded-full">
          {icon}
        </div>
      </div>
      
      {changeText && (
        <div className={`flex items-center text-sm ${
          changeType === "positive" ? "text-green-600" : 
          changeType === "negative" ? "text-red-600" : 
          "text-gray-600"
        }`}>
          {changeAmount !== undefined && (
            <span className="mr-1">
              {changeType === "positive" ? "↑" : 
               changeType === "negative" ? "↓" : "→"} 
              {changeAmount}%
            </span>
          )}
          <span>{changeText}</span>
        </div>
      )}
    </div>
  );
};

export default MetricCard;
