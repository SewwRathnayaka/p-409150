import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AdvantagesSection from "@/components/home/AdvantagesSection";
import ServicesSection from "@/components/home/ServicesSection";
import ContactForm from "@/components/ui/ContactForm";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Myanmar+Khyay&family=Spline+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-[#14B22D]">
              Get In Touch
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="mb-6">
                  Have questions or need assistance? Our team is here to help
                  you with all your handyman service needs.
                </p>
                <div className="flex items-center mb-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2.5"
                  >
                    <g clipPath="url(#clip0_contact_phone)">
                      <path
                        d="M18.3334 14.1V16.6C18.3344 16.8321 18.2868 17.0618 18.1939 17.2744C18.1009 17.4871 17.9645 17.678 17.7935 17.8349C17.6225 17.9918 17.4206 18.1112 17.2007 18.1856C16.9809 18.2599 16.7479 18.2875 16.5168 18.2666C13.9525 17.988 11.4893 17.1118 9.32511 15.7083C7.31163 14.4289 5.60455 12.7218 4.32511 10.7083C2.91676 8.53432 2.04031 6.05914 1.76677 3.48331C1.74595 3.25287 1.77334 3.02061 1.84719 2.80133C1.92105 2.58205 2.03975 2.38055 2.19575 2.20966C2.35174 2.03877 2.54161 1.90224 2.75327 1.80875C2.96492 1.71526 3.19372 1.66686 3.42511 1.66665H5.92511C6.32953 1.66267 6.7216 1.80588 7.02824 2.06959C7.33488 2.3333 7.53517 2.69952 7.59177 3.09998C7.69729 3.90003 7.89298 4.68558 8.17511 5.44165C8.28723 5.73992 8.31149 6.06407 8.24503 6.37571C8.17857 6.68735 8.02416 6.9734 7.80011 7.19998L6.74177 8.25831C7.92807 10.3446 9.65549 12.072 11.7418 13.2583L12.8001 12.2C13.0267 11.9759 13.3127 11.8215 13.6244 11.7551C13.936 11.6886 14.2602 11.7129 14.5584 11.825C15.3145 12.1071 16.1001 12.3028 16.9001 12.4083C17.3049 12.4654 17.6746 12.6693 17.9389 12.9812C18.2032 13.2931 18.3436 13.6913 18.3334 14.1Z"
                        stroke="#14B22D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_contact_phone">
                        <rect width="20" height="20" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-gray-700">+94 123 456 789</span>
                </div>
                <div className="flex items-center mb-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2.5"
                  >
                    <path
                      d="M16.6667 3.33331H3.33341C2.41294 3.33331 1.66675 4.07951 1.66675 4.99998V15C1.66675 15.9205 2.41294 16.6666 3.33341 16.6666H16.6667C17.5872 16.6666 18.3334 15.9205 18.3334 15V4.99998C18.3334 4.07951 17.5872 3.33331 16.6667 3.33331Z"
                      stroke="#14B22D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M18.3334 5.83331L10.8584 10.5833C10.6011 10.7445 10.3037 10.83 10.0001 10.83C9.69648 10.83 9.39902 10.7445 9.14175 10.5833L1.66675 5.83331"
                      stroke="#14B22D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="text-gray-700">info@xfinder.lk</span>
                </div>
                <div className="flex items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2.5"
                  >
                    <path
                      d="M17.5 8.33333C17.5 14.1667 10 19.1667 10 19.1667C10 19.1667 2.5 14.1667 2.5 8.33333C2.5 6.34421 3.29018 4.43655 4.6967 3.03003C6.10322 1.62351 8.01088 0.833333 10 0.833333C11.9891 0.833333 13.8968 1.62351 15.3033 3.03003C16.7098 4.43655 17.5 6.34421 17.5 8.33333Z"
                      stroke="#14B22D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z"
                      stroke="#14B22D"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-700">
                    123 Main Street, Colombo, Sri Lanka
                  </span>
                </div>
              </div>
              <div className="md:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Index;
