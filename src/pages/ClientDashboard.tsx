
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ClientDashboard: React.FC = () => {
  // Mock client data
  const clientName = "John";
  const recentRequests = [
    { id: 1, service: "Plumbing Repair", date: "April 15, 2025", status: "Completed" },
    { id: 2, service: "Electrical Wiring", date: "April 10, 2025", status: "In Progress" },
    { id: 3, service: "Furniture Assembly", date: "April 5, 2025", status: "Pending" },
  ];

  const recommendedServices = [
    { id: 1, name: "Plumbing Services", description: "Professional plumbing repairs and installations" },
    { id: 2, name: "Electrical Services", description: "Licensed electricians for all your electrical needs" },
    { id: 3, name: "Carpentry", description: "Custom woodworking and furniture assembly" },
    { id: 4, name: "Painting", description: "Interior and exterior painting services" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {clientName}!</h1>
            <p className="text-gray-600 mt-2">
              Manage your service requests and find skilled handymen for your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle>Request a Service</CardTitle>
                <CardDescription>Find skilled professionals for your project</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary">Find a Handyman</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ongoing Services</CardTitle>
                <CardDescription>Track your current service requests</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <span className="text-4xl font-bold text-primary">2</span>
                <p className="text-gray-500 mt-2">active requests</p>
                <Button variant="outline" className="w-full mt-4">View Details</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service History</CardTitle>
                <CardDescription>View your past service requests</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <span className="text-4xl font-bold text-primary">5</span>
                <p className="text-gray-500 mt-2">completed services</p>
                <Button variant="outline" className="w-full mt-4">View History</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Service Requests</CardTitle>
                <CardDescription>Track the status of your recent requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRequests.map((request) => (
                    <div key={request.id} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="font-medium">{request.service}</h3>
                        <p className="text-sm text-gray-500">{request.date}</p>
                      </div>
                      <div>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          request.status === "Completed" 
                            ? "bg-green-100 text-green-800" 
                            : request.status === "In Progress" 
                            ? "bg-blue-100 text-blue-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {request.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Requests
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Services</CardTitle>
                <CardDescription>Popular services you might be interested in</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedServices.map((service) => (
                    <div key={service.id} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="font-medium">{service.name}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                      </div>
                      <div>
                        <Button size="sm" variant="ghost" className="text-primary">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClientDashboard;
