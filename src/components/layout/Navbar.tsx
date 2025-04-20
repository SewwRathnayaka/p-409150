
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Mock authentication state - this would come from Clerk in the future
  const isAuthenticated = location.pathname === "/handyman-dashboard" || location.pathname === "/client-dashboard";
  const userType = location.pathname === "/handyman-dashboard" ? "handyman" : "client";
  const userName = "John"; // This would come from Clerk in the future

  return (
    <nav className="flex items-center justify-between h-[73px] bg-[#14B22D] px-5 py-0 max-md:px-2.5 max-md:py-0 max-sm:px-[5px] max-sm:py-0 relative">
      <div className="absolute w-full h-[73px] bg-[#14B22D] left-0 top-0" />
      <Link to="/">
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a4c741b401606dd47d9440db3d87262eb472f2?placeholderIfAbsent=true" 
          className="h-11 ml-5 relative z-10" 
          alt="Logo" 
        />
      </Link>
      
      <div className="hidden md:flex gap-5 relative z-10">
        <Link to="/" className="text-xl text-white cursor-pointer hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-xl text-white cursor-pointer hover:underline">
          About Us
        </Link>
        <Link to="/services" className="text-xl text-white cursor-pointer hover:underline">
          Services
        </Link>
        <Link to="/contact" className="text-xl text-white cursor-pointer hover:underline">
          Contact Us
        </Link>
      </div>
      
      <div className="md:hidden relative z-10">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="text-white p-2"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-[73px] left-0 w-full bg-[#14B22D] flex flex-col items-center py-4 z-20">
          <Link to="/" className="text-xl text-white cursor-pointer hover:underline py-2">
            Home
          </Link>
          <Link to="/about" className="text-xl text-white cursor-pointer hover:underline py-2">
            About Us
          </Link>
          <Link to="/services" className="text-xl text-white cursor-pointer hover:underline py-2">
            Services
          </Link>
          <Link to="/contact" className="text-xl text-white cursor-pointer hover:underline py-2">
            Contact Us
          </Link>
          {!isAuthenticated ? (
            <>
              <Link to="/signup" className="w-auto h-10 bg-yellow-600 text-white text-xl cursor-pointer flex items-center justify-center rounded px-4 my-2">
                Sign up
              </Link>
              <Link to="/login" className="w-auto h-10 bg-[#F6AC3D] text-white text-xl cursor-pointer flex items-center justify-center rounded px-4 my-2">
                Log in
              </Link>
            </>
          ) : (
            <div className="text-xl text-white py-2">
              Hello, {userName}
            </div>
          )}
        </div>
      )}

      <div className="hidden md:flex gap-2.5 relative z-10">
        {!isAuthenticated ? (
          <>
            <Link to="/signup" className="w-auto h-10 bg-yellow-600 text-white text-xl cursor-pointer flex items-center justify-center rounded px-4">
              Sign up
            </Link>
            <Link to="/login" className="w-auto h-10 bg-[#F6AC3D] text-white text-xl cursor-pointer flex items-center justify-center rounded px-4">
              Log in
            </Link>
          </>
        ) : (
          <div className="flex items-center">
            <span className="text-white text-xl mr-4">Hello, {userName}</span>
            {userType === "handyman" && (
              <Link to="/handyman-dashboard" className="w-auto h-10 bg-[#F6AC3D] text-white text-xl cursor-pointer flex items-center justify-center rounded px-4">
                Dashboard
              </Link>
            )}
            {userType === "client" && (
              <Link to="/client-dashboard" className="w-auto h-10 bg-[#F6AC3D] text-white text-xl cursor-pointer flex items-center justify-center rounded px-4">
                My Account
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
