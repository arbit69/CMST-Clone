import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Right Section - Images */}
        <div className="w-full h-[400px] relative flex justify-center items-center order-1 md:order-2">
          {/* Background Image */}
          <img
            src="https://cmst.xyz/css/v2/image/circle-vector-group-1.png"
            alt="Background"
            className="absolute w-[60%] h-auto z-0 sm:w-[70%] md:w-[450px]" // Adjusted width for visibility
          />

          {/* Laptop Image */}
          <img
            src="https://cmst.xyz/css/v2/image/hero_image_1.png"
            alt="Laptop"
            className="relative w-[60%] h-auto z-10 mt-4 sm:w-[70%] md:mt-6 md:w-[360px]" // Adjusted margins and widths
          />
        </div>

        {/* Left Section - Text */}
        <div className="w-full px-6 md:px-12 text-center md:text-left order-2 md:order-1">
          <h2 className="text-green-600 font-semibold uppercase mb-4">World's Best</h2>
          <h1 className="text-4xl md:text-3xl font-bold text-black mb-6 leading-tight">
            Consultancy Management System
          </h1>
          <p className="text-gray-600 mb-8">
            CMST is a full-featured web portal designed to handle day-to-day activities at an educational consultancy, 
            saving all the trouble of organizing and maintaining various kinds of resources that are stumbled upon on a 
            regular basis.
          </p>
          {/* Button */}
          <a
            href="https://cmst.xyz/register"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded inline-flex items-center"
          >
            Create Free Account
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
