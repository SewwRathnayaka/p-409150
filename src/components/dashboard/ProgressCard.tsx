
import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressCardProps {
  title: string;
  currentValue: number;
  targetValue: number;
  unit?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  currentValue,
  targetValue,
  unit = "",
}) => {
  const percentage = Math.min(Math.round((currentValue / targetValue) * 100), 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <span className="text-sm font-semibold">
          {currentValue}{unit} / {targetValue}{unit}
        </span>
      </div>
      <Progress value={percentage} className="h-2 bg-gray-200" />
      <p className="text-xs text-gray-500 mt-2">
        {percentage}% of monthly target
      </p>
    </div>
  );
};

export default ProgressCard;
