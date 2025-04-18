
import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Carpentry",
      description:
        "Expert carpentry services for all your woodworking needs, from repairs to custom furniture.",
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/568d059a51878fc49dd8eba75b5659df48501a64?placeholderIfAbsent=true", // Using placeholder URL
    },
    {
      title: "Electrical",
      description:
        "Professional electrical services for installations, repairs, and maintenance of all electrical systems.",
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/62b68f7fd0d46c77bcf9273f3f54f6c41c3bb27f?placeholderIfAbsent=true", // Using placeholder URL
    },
    {
      title: "Plumbing",
      description:
        "Comprehensive plumbing services to fix leaks, install fixtures, and maintain your plumbing systems.",
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/91466dcf108cf2b4d3581139d7492d61f5e2d3cc?placeholderIfAbsent=true", // Using placeholder URL
    },
    {
      title: "Painting",
      description:
        "Quality painting services for interior and exterior surfaces, giving your space a fresh new look.",
      iconUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/5af84a0b6e465b0309c4672ec705a89eaaf88004?placeholderIfAbsent=true", // Using placeholder URL
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8 text-primary">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconUrl={service.iconUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
