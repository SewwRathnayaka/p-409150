
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

interface Notification {
  id: string;
  message: string;
  time: string;
  type: "info" | "warning" | "success" | "error";
  read: boolean;
}

interface NotificationPanelProps {
  notifications: Notification[];
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ notifications }) => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "info":
        return (
          <div className="p-1 rounded-full bg-blue-100 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
        );
      case "warning":
        return (
          <div className="p-1 rounded-full bg-yellow-100 text-yellow-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
        );
      case "success":
        return (
          <div className="p-1 rounded-full bg-green-100 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        );
      case "error":
        return (
          <div className="p-1 rounded-full bg-red-100 text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Notifications</CardTitle>
        <Bell className="h-5 w-5 text-gray-500" />
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {notifications.length === 0 ? (
            <p className="text-sm text-gray-500 text-center py-4">
              No new notifications
            </p>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-md border-l-4 ${
                  notification.read ? "bg-gray-50 border-gray-300" : "bg-white border-[#14B22D]"
                }`}
              >
                <div className="flex gap-3">
                  {getNotificationIcon(notification.type)}
                  <div className="flex-1">
                    <p className={`text-sm ${!notification.read ? "font-medium" : ""}`}>
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
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

export default NotificationPanel;
