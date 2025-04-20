
import React from "react";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Wrench, User, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const ClientDashboard: React.FC = () => {
  // Mock data - in a real app this would come from an API
  const userName = "Sarah";
  const bookings = [
    { 
      id: 1, 
      service: "Plumbing Repair",
      date: "Apr 20th • Today, 2:00 PM",
      status: "pending"
    },
    { 
      id: 2, 
      service: "Electrical Maintenance",
      date: "Mar 21st • Tomorrow, 10:00 AM",
      status: "pending"
    },
    { 
      id: 3, 
      service: "Painting",
      date: "Feb 15th • Today, 12:00 AM",
      status: "completed"
    }
  ];

  const recentMessages = [
    {
      id: 1,
      name: "John Smith",
      role: "Plumber",
      message: "I'll be arriving in 15 minutes..."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Welcome back, <span className="text-[#14B22D]">{userName}</span></h1>
            <p className="text-gray-600">What can we help you with today?</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Link to="/client-settings">
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mb-8">
          <Input 
            type="search"
            placeholder="Search Services"
            className="w-full pl-10"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg className="h-5 w-5 text-gray-400" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Popular Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "plumbing", name: "Plumbing" },
              { icon: "electrical", name: "Electrical" },
              { icon: "painting", name: "Painting" },
              { icon: "home-repair", name: "House Repair" }
            ].map((service) => (
              <Card key={service.name} className="p-4 text-center cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <Wrench className="h-8 w-8 mx-auto mb-2 text-[#14B22D]" />
                  <p className="text-sm font-medium">{service.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Button className="w-full bg-[#F6AC3D] hover:bg-[#F6AC3D]/90 text-white mb-8">
          Book Service
        </Button>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Your Bookings</h2>
          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking.id} className="p-4">
                <CardContent className="p-0 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-[#14B22D]/10 rounded-full flex items-center justify-center">
                      <Wrench className="h-6 w-6 text-[#14B22D]" />
                    </div>
                    <div>
                      <h3 className="font-medium">{booking.service}</h3>
                      <p className="text-sm text-gray-500">{booking.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    booking.status === "completed" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {booking.status}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <Card key={message.id} className="p-4">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="h-10 w-10 bg-[#14B22D] rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium">{message.name} ({message.role})</h3>
                    <p className="text-sm text-gray-500">{message.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClientDashboard;
