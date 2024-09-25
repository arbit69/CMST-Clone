import React from 'react';

export default function Component() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 mb-6">
          JOIN THE DIGITAL CHANGE TODAY
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          With CMST, it's not a matter of why, but a matter of when. It's never too late to go digital and boost your
          company's performance with CMST.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-3 rounded-full text-sm">
          Get Started
        </button>
        <div className="mt-48">
          <h2 className="text-4xl md:text-5xl font-bold ">
            3K+ <span className="text-green-500">Happy Users</span>
          </h2>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-100 rounded-full opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-green-200 rounded-full opacity-30" />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-green-200 rounded-full opacity-30" />
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      </div>
    </div>
  );
}
