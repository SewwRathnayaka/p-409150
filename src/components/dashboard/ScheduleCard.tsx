
import React from "react";
import { Calendar, Clock, MapPin, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScheduleItem {
  id: string;
  time: string;
  clientName: string;
  serviceType: string;
  location: string;
  status: "upcoming" | "in-progress" | "completed" | "cancelled";
}

interface ScheduleCardProps {
  items: ScheduleItem[];
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ items }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Today's Schedule</CardTitle>
        <Calendar className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              No jobs scheduled for today
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="border-l-4 border-[#14B22D] rounded-r-md bg-gray-50 p-3"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold mb-1">{item.serviceType}</h4>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <User className="h-4 w-4 mr-1" />
                      <span>{item.clientName}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-sm font-medium">{item.time}</span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status.replace("-", " ")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
