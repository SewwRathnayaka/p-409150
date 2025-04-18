
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Award, Building } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-primary text-center mb-6">About FixFinder</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              We connect skilled handymen with customers who need reliable home maintenance and repair services.
            </p>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Team</h3>
                <p className="text-gray-600">
                  A dedicated group of professionals committed to connecting skilled handymen with customers in need.
                </p>
              </div>
              <div className="text-center p-6">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To revolutionize home services by making professional handyman assistance accessible to everyone.
                </p>
              </div>
              <div className="text-center p-6">
                <Building className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the most trusted platform for connecting homeowners with skilled professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-primary text-center mb-8">Our Story</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 mb-6">
                Founded in 2024, FixFinder emerged from a simple observation: finding reliable handymen shouldn't be a challenge. We created a platform that seamlessly connects skilled professionals with homeowners, ensuring quality service every time.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve communities across Sri Lanka, helping homeowners maintain their properties while providing opportunities for skilled handymen to grow their businesses.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
