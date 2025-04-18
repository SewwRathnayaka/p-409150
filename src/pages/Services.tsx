
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Zap, Paintbrush, Construction } from "lucide-react";

const serviceDetails = [
  {
    title: "Carpentry",
    icon: <Construction className="w-12 h-12 text-primary" />,
    description: "Expert carpentry services for repairs, installations, and custom woodwork.",
    features: ["Furniture Assembly", "Cabinet Installation", "Door Repairs", "Custom Woodwork"],
    pricing: "Starting from Rs. 2,500/hour"
  },
  {
    title: "Electrical",
    icon: <Zap className="w-12 h-12 text-primary" />,
    description: "Professional electrical services for all your home and office needs.",
    features: ["Wiring Installation", "Light Fixtures", "Circuit Repairs", "Safety Inspections"],
    pricing: "Starting from Rs. 3,000/hour"
  },
  {
    title: "Plumbing",
    icon: <Wrench className="w-12 h-12 text-primary" />,
    description: "Comprehensive plumbing solutions for repairs and installations.",
    features: ["Leak Repairs", "Pipe Installation", "Drain Cleaning", "Fixture Installation"],
    pricing: "Starting from Rs. 2,800/hour"
  },
  {
    title: "Painting",
    icon: <Paintbrush className="w-12 h-12 text-primary" />,
    description: "Quality painting services for interior and exterior surfaces.",
    features: ["Interior Painting", "Exterior Painting", "Wall Repairs", "Wallpaper Installation"],
    pricing: "Starting from Rs. 2,000/hour"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary text-center mb-6">Our Services</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Professional and reliable handyman services for all your home maintenance needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceDetails.map((service, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      {service.icon}
                      <div>
                        <CardTitle className="text-2xl font-semibold text-primary">
                          {service.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {service.pricing}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-primary mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a service today and experience professional, reliable handyman services at your doorstep.
            </p>
            <button className="bg-accent hover:bg-secondary text-white px-8 py-3 rounded-md transition-colors font-semibold">
              Book Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
