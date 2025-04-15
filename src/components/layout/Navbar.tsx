import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-[73px] bg-[#14B22D] px-5 py-0 max-md:px-2.5 max-md:py-0 max-sm:px-[5px] max-sm:py-0 relative">
      <div className="absolute w-full h-[73px] bg-[#14B22D] left-0 top-0" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a4c741b401606dd47d9440db3d87262eb472f2?placeholderIfAbsent=true" className="h-11 ml-5 relative z-10" alt="Logo" />
      <div className="flex gap-5 max-md:hidden relative z-10">
        <a
          href="/"
          className="text-xl text-white cursor-pointer hover:underline"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-xl text-white cursor-pointer hover:underline"
        >
          About Us
        </a>
        <a
          href="/services"
          className="text-xl text-white cursor-pointer hover:underline"
        >
          Services
        </a>
        <a
          href="/contact"
          className="text-xl text-white cursor-pointer hover:underline"
        >
          Contact Us
        </a>
      </div>
      <div className="flex gap-2.5 max-md:hidden relative z-10">
        <button className="w-20 h-10 bg-yellow-600 text-white text-xl cursor-pointer flex items-center justify-center rounded">
          Sign up
        </button>
        <button className="w-20 h-10 bg-[#F6AC3D] text-white text-xl cursor-pointer flex items-center justify-center rounded">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
