
import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import MetricCard from "@/components/dashboard/MetricCard";
import ProgressCard from "@/components/dashboard/ProgressCard";
import ScheduleCard from "@/components/dashboard/ScheduleCard";
import JobHistoryTable from "@/components/dashboard/JobHistoryTable";
import NotificationPanel from "@/components/dashboard/NotificationPanel";
import { DollarSign, BarChart2, CheckCircle, Clock } from "lucide-react";

const HandymanDashboard: React.FC = () => {
  // Mock data for the dashboard
  const scheduleItems = [
    {
      id: "1",
      time: "9:00 AM - 10:30 AM",
      clientName: "Sarah Johnson",
      serviceType: "Plumbing Repair",
      location: "123 Oak Street",
      status: "completed" as const,
    },
    {
      id: "2",
      time: "11:30 AM - 1:00 PM",
      clientName: "Michael Smith",
      serviceType: "Electrical Wiring",
      location: "456 Pine Avenue",
      status: "in-progress" as const,
    },
    {
      id: "3",
      time: "3:00 PM - 5:00 PM",
      clientName: "Emily Davis",
      serviceType: "Bathroom Renovation",
      location: "789 Maple Road",
      status: "upcoming" as const,
    },
  ];

  const recentJobs = [
    {
      id: "101",
      date: "Apr 14, 2025",
      clientName: "David Wilson",
      serviceType: "Plumbing",
      payment: 120.00,
      status: "completed" as const,
      rating: 5,
    },
    {
      id: "102",
      date: "Apr 12, 2025",
      clientName: "Jennifer Lee",
      serviceType: "Electrical",
      payment: 95.50,
      status: "completed" as const,
      rating: 4,
    },
    {
      id: "103",
      date: "Apr 10, 2025",
      clientName: "Robert Brown",
      serviceType: "Plumbing",
      payment: 150.00,
      status: "completed" as const,
      rating: 5,
    },
    {
      id: "104",
      date: "Apr 8, 2025",
      clientName: "Patricia Miller",
      serviceType: "Carpentry",
      payment: 200.00,
      status: "completed" as const,
      rating: 4,
    },
    {
      id: "105",
      date: "Apr 5, 2025",
      clientName: "Linda Garcia",
      serviceType: "Electrical",
      payment: 85.00,
      status: "cancelled" as const,
    },
  ];

  const notifications = [
    {
      id: "n1",
      message: "New job request from Michael Smith",
      time: "10 minutes ago",
      type: "info" as const,
      read: false,
    },
    {
      id: "n2",
      message: "Payment of $120.00 has been processed",
      time: "2 hours ago",
      type: "success" as const,
      read: false,
    },
    {
      id: "n3",
      message: "Your job with David Wilson has been rated 5 stars",
      time: "Yesterday",
      type: "success" as const,
      read: true,
    },
    {
      id: "n4",
      message: "Please update your availability for next week",
      time: "2 days ago",
      type: "warning" as const,
      read: true,
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-y-auto p-0 md:p-0">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Dashboard</h1>
            <p className="text-gray-600">
              Welcome back! Here's what's happening with your jobs today.
            </p>
          </div>

          {/* Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <MetricCard
              title="Total Earnings"
              value="$2,458.50"
              icon={<DollarSign className="h-5 w-5 text-[#14B22D]" />}
              changeText="from last month"
              changeAmount={12}
              changeType="positive"
            />
            <MetricCard
              title="Jobs Completed"
              value="24"
              icon={<CheckCircle className="h-5 w-5 text-[#14B22D]" />}
              changeText="from last month"
              changeAmount={8}
              changeType="positive"
            />
            <MetricCard
              title="Average Rating"
              value="4.8"
              icon={<BarChart2 className="h-5 w-5 text-[#14B22D]" />}
              changeText="based on 24 reviews"
            />
            <MetricCard
              title="Response Rate"
              value="95%"
              icon={<Clock className="h-5 w-5 text-[#14B22D]" />}
              changeText="response time: ~25 min"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <ScheduleCard items={scheduleItems} />
              <JobHistoryTable jobs={recentJobs} />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <NotificationPanel notifications={notifications} />

              <div className="bg-white rounded-lg shadow-md p-5">
                <h3 className="text-lg font-bold mb-4">Monthly Goals</h3>
                <div className="space-y-4">
                  <ProgressCard
                    title="Jobs Completed"
                    currentValue={24}
                    targetValue={30}
                  />
                  <ProgressCard
                    title="Revenue"
                    currentValue={2458}
                    targetValue={3000}
                    unit="$"
                  />
                  <ProgressCard
                    title="Client Satisfaction"
                    currentValue={96}
                    targetValue={100}
                    unit="%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandymanDashboard;
