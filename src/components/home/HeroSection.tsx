
import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full py-24 flex items-center overflow-hidden">
      <div className="absolute w-full h-full bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/58075a33c571748a9d684bc136c6e7103980e1ea?placeholderIfAbsent=true')] bg-cover opacity-[0.12] top-0 left-0" />
      <div className="absolute w-full h-full bg-black opacity-75 top-0 left-0" />
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="text-white text-left max-w-2xl z-[1]">
            <div className="inline-flex items-center mb-5 bg-black bg-opacity-75 rounded-full py-2 px-5">
              <div className="text-xl md:text-2xl text-[#F6AC3D] font-heading">
                Who We Are,
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bddec547e383da0edc73e643c94dfbbd6c77a89?placeholderIfAbsent=true"
                className="w-10 h-10 ml-5 rounded-full"
                alt="Icon"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight tracking-wide mb-5">
              The best handyman near you
            </h1>
            <p className="text-sm md:text-base font-medium leading-relaxed mb-6 max-w-xl">
              Specializing in remodeling, home repair as well as handyman services
              for residential and commercial establishments. We pride ourselves on
              our dedication to excellence and perfection in every aspect of our
              business.
            </p>
            <button className="flex items-center justify-center px-6 py-3 bg-[#F6AC3D] shadow-lg hover:bg-[#e09c2e] transition-all rounded-full">
              <span className="text-sm font-medium text-white mr-2">
                Browse our services
              </span>
              <div className="browse-button-icon bg-white rounded-full p-1">
                <ArrowRight size={16} className="text-[#292D32]" />
              </div>
            </button>
          </div>
          <div className="hidden md:block md:w-2/5 lg:w-1/2">
            {/* This div intentionally left empty as the hero image will be displayed in larger screens */}
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3277e412a01a152ccc09497fc168723112d2aab?placeholderIfAbsent=true"
        className="hidden md:block absolute w-5/12 h-auto rounded-l-2xl right-0 top-1/2 transform -translate-y-1/2 z-0"
        alt="Hero Image"
      />
    </section>
  );
};

export default HeroSection;
