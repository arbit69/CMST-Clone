import React from "react";

const logos = [
  { name: "KIEC", src: "https://cmst.xyz/css/v2/image/kiec.png" },
  {
    name: "Kangaroo Education Foundation",
    src: "https://cmst.xyz/css/v2/image/kangaroo.png",
  },
  {
    name: "MATES International",
    src: "https://cmst.xyz/css/v2/image/mates.png",
  },
  {
    name: "MOTIF Education Abroad",
    src: "https://cmst.xyz/css/v2/image/motif.png",
  },
  { name: "EuroLink", src: "https://cmst.xyz/css/v2/image/euro-link.png" },
  { name: "WEMS", src: "https://cmst.xyz/css/v2/image/wems.png" },
  {
    name: "Education 4 U",
    src: "https://cmst.xyz/css/v2/image/education-4-u.png",
  },
  {
    name: "WELL Education",
    src: "https://cmst.xyz/css/v2/image/well-education.png",
  },
  { name: "EBIS", src: "https://cmst.xyz/css/v2/image/ebis.png" },
];

export default function EducationConsultancies() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Powering
          <span className="relative inline-block px-2 text-black">
            750+ Education Consultancies
            <span className="absolute left-0 right-0 bottom-0 h-[4px] bg-green-500 opacity-50 blur-sm shadow-md"></span>
          </span>
          Around World
        </h2>
        
        {/* Flex container for two rows */}
        <div className="flex flex-col">
          {/* First Row of Images */}
          <div className="flex justify-center mb-0">
            {logos.slice(0, 5).map((logo) => (
              <div
                key={logo.name}
                className="flex justify-center items-center m-0 p-0" // Remove margin and padding
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="max-h-12 object-contain filter grayscale"
                />
              </div>
            ))}
          </div>

          {/* Second Row of Images */}
          <div className="flex justify-center mb-0">
            {logos.slice(5).map((logo) => (
              <div
                key={logo.name}
                className="flex justify-center items-center m-0 p-0" // Remove margin and padding
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={80}
                  className="max-h-12 object-contain filter grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
