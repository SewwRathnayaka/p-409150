import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[810px] flex items-center justify-center">
      <div className="absolute w-full h-[810px] bg-[url('https://cdn.builder.io/api/v1/image/assets/TEMP/58075a33c571748a9d684bc136c6e7103980e1ea?placeholderIfAbsent=true')] bg-cover opacity-[0.12]" />
      <div className="absolute w-full h-[810px] bg-black opacity-75" />
      <div className="relative z-[1] text-white text-left p-5 max-md:p-2.5">
        <div className="flex items-center mb-5 relative">
          <div className="w-[546px] h-[71px] bg-black opacity-75 rounded-[50px] absolute" />
          <div className="text-[32px] text-[#F6AC3D] ml-5 relative z-10">
            Who We Are,
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6bddec547e383da0edc73e643c94dfbbd6c77a89?placeholderIfAbsent=true"
            className="w-[54px] h-[54px] ml-5 rounded-[50%] relative z-10"
            alt="Icon"
          />
        </div>
        <h1 className="text-[64px] leading-[1.2] tracking-[5.76px] mb-5 max-sm:text-5xl">
          The best handyman near you
        </h1>
        <p className="text-base font-bold leading-normal mb-5 max-sm:text-sm max-w-3xl">
          Specializing in remodeling, home repair as well as handyman services
          for residential and commercial establishments. We pride ourselves on
          our dedication to excellence and perfection in every aspect of our
          business, from your initial contact with us to workmanship, innovative
          solutions and loyalty.
        </p>
        <button className="flex items-center justify-center w-[248px] h-[47px] bg-[#F6AC3D] shadow-[0px_8px_4px_rgba(0,0,0,0.25)] cursor-pointer rounded-[40px] relative">
          <div className="absolute w-[241px] h-[47px] bg-[#F6AC3D] shadow-[0px_8px_4px_rgba(0,0,0,0.25)] rounded-[40px]" />
          <span className="text-base text-white font-bold relative z-10">
            Browse our services
          </span>
          <svg
            width="37"
            height="33"
            viewBox="0 0 37 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 ml-2.5"
          >
            <ellipse
              cx="18.3864"
              cy="16.5925"
              rx="18.2945"
              ry="16.2707"
              fill="white"
            ></ellipse>
            <path
              d="M21.5881 10.0125L28.7067 16.601L21.5881 23.1895M8.77014 16.601H28.5073"
              stroke="#292D32"
              strokeWidth="5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3277e412a01a152ccc09497fc168723112d2aab?placeholderIfAbsent=true"
        className="absolute w-[1027px] h-[700px] rounded-[25px] right-0 top-[177px]"
        alt="Hero Image"
      />
    </section>
  );
};

export default HeroSection;
