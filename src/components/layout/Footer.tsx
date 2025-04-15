import React from "react";

interface FooterLinkProps {
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => {
  return (
    <div className="text-xs text-white leading-normal cursor-pointer mb-[5px] hover:underline">
      {children}
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#14B22D] px-5 py-10">
      <div className="absolute w-full h-full bg-[#14B22D] left-0 top-0" />
      <div className="flex justify-between flex-wrap gap-5 max-md:flex-col max-md:items-center max-md:text-center max-sm:flex-col max-sm:items-center relative z-10">
        {/* Company Info */}
        <div className="flex-1 min-w-[200px] max-md:items-center max-md:text-center max-sm:items-center max-sm:text-center">
          <div className="text-[15px] text-white font-bold mb-2.5">
            Fixfinder
          </div>
          <div className="text-xs text-white leading-normal">
            Connecting Sri Lanka to reliable handyman services anytime,
            anywhere.
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[200px] max-md:items-center max-md:text-center max-sm:items-center max-sm:text-center">
          <div className="text-[15px] text-white font-bold mb-2.5">
            Quick Links
          </div>
          <FooterLink>Home</FooterLink>
          <FooterLink>About Us</FooterLink>
          <FooterLink>Services</FooterLink>
          <FooterLink>Contact</FooterLink>
        </div>

        {/* Services */}
        <div className="flex-1 min-w-[200px] max-md:items-center max-md:text-center max-sm:items-center max-sm:text-center">
          <div className="text-[15px] text-white font-bold mb-2.5">
            Services
          </div>
          <FooterLink>Carpentry</FooterLink>
          <FooterLink>Electrical</FooterLink>
          <FooterLink>Plumbing</FooterLink>
          <FooterLink>Painting</FooterLink>
        </div>

        {/* Contact Us */}
        <div className="flex-1 min-w-[200px] max-md:items-center max-md:text-center max-sm:items-center max-sm:text-center">
          <div className="text-[15px] text-white font-bold mb-2.5">
            Contact Us
          </div>
          <div className="flex items-center mb-[5px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2.5"
            >
              <g clipPath="url(#clip0_223_271)">
                <path
                  d="M18.3334 14.1V16.6C18.3344 16.8321 18.2868 17.0618 18.1939 17.2744C18.1009 17.4871 17.9645 17.678 17.7935 17.8349C17.6225 17.9918 17.4206 18.1112 17.2007 18.1856C16.9809 18.2599 16.7479 18.2875 16.5168 18.2666C13.9525 17.988 11.4893 17.1118 9.32511 15.7083C7.31163 14.4289 5.60455 12.7218 4.32511 10.7083C2.91676 8.53432 2.04031 6.05914 1.76677 3.48331C1.74595 3.25287 1.77334 3.02061 1.84719 2.80133C1.92105 2.58205 2.03975 2.38055 2.19575 2.20966C2.35174 2.03877 2.54161 1.90224 2.75327 1.80875C2.96492 1.71526 3.19372 1.66686 3.42511 1.66665H5.92511C6.32953 1.66267 6.7216 1.80588 7.02824 2.06959C7.33488 2.3333 7.53517 2.69952 7.59177 3.09998C7.69729 3.90003 7.89298 4.68558 8.17511 5.44165C8.28723 5.73992 8.31149 6.06407 8.24503 6.37571C8.17857 6.68735 8.02416 6.9734 7.80011 7.19998L6.74177 8.25831C7.92807 10.3446 9.65549 12.072 11.7418 13.2583L12.8001 12.2C13.0267 11.9759 13.3127 11.8215 13.6244 11.7551C13.936 11.6886 14.2602 11.7129 14.5584 11.825C15.3145 12.1071 16.1001 12.3028 16.9001 12.4083C17.3049 12.4654 17.6746 12.6693 17.9389 12.9812C18.2032 13.2931 18.3436 13.6913 18.3334 14.1Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_223_271">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div className="text-xs text-white">+94 123 456 789</div>
          </div>
          <div className="flex items-center mb-[5px]">
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
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M18.3334 5.83331L10.8584 10.5833C10.6011 10.7445 10.3037 10.83 10.0001 10.83C9.69648 10.83 9.39902 10.7445 9.14175 10.5833L1.66675 5.83331"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="text-xs text-white">info@xfinder.lk</div>
          </div>
          <div className="flex gap-2.5">
            <a href="#" aria-label="Facebook">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 4.00002C22 4.00002 21.3 6.10002 20 7.40002C21.6 17.4 10.6 24.7 2 19C4.2 19.1 6.4 18.4 8 17C3 15.5 0.5 9.60002 3 5.00002C5.2 7.60002 8.6 9.10002 12 9.00002C11.1 4.80002 16 2.40002 19 5.20002C20.1 5.20002 22 4.00002 22 4.00002Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16 11.37C16.1234 12.2022 15.9812 13.0522 15.5937 13.799C15.2062 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4077 15.9059C10.5771 15.7723 9.80971 15.3801 9.21479 14.7852C8.61987 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45414 8.79374 10.2009 8.40624C10.9477 8.01874 11.7977 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8716 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M17.5 6.5H17.51"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs text-white pt-5 border-t-[rgba(255,255,255,0.2)] border-t border-solid mt-5 relative z-10">
        © 2025 Fixfinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
