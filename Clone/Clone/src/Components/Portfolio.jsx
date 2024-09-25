import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "CMST has been a game-changer for my education consultancy. The automated email feature keeps students updated on every step, while the auto task assign feature streamlines my workload. The mobile app allows me to manage tasks on-the-go. I highly recommend it to any consultancy looking to improve productivity and customer service.",
    name: "President KAZI FARIDUL HAQUE HAPPY",
    title: "President",
    organization: "FACD-CAB Bangladesh",
    image: "https://cmst.xyz/css/v2/image/president-KAZI FARIDUL-HAQUE-HAPPY.png"
  },
  {
    id: 2,
    content: "CMST has been a game-changer for my education consultancy. The automated email feature keeps students updated on every step, while the auto task assign feature streamlines my workload. The mobile app allows me to manage tasks on-the-go. I highly recommend it to any consultancy looking to improve productivity and customer service.",
    name: "John Doe",
    title: "CEO",
    organization: "Tech Company",
    image: "https://cmst.xyz/css/v2/image/mr.bhishma.jpeg"
  },
  {
    id: 3,
    content: "CMST has been a game-changer for my education consultancy. The automated email feature keeps students updated on every step, while the auto task assign feature streamlines my workload. The mobile app allows me to manage tasks on-the-go. I highly recommend it to any consultancy looking to improve productivity and customer service.",
    name: "Jane Smith",
    title: "Manager",
    organization: "Service Industry",
    image: "https://cmst.xyz/css/v2/image/mr.ashish.jpeg"
  },
  {
    id: 4,
    content: "CMST has been a game-changer for my education consultancy. The automated email feature keeps students updated on every step, while the auto task assign feature streamlines my workload. The mobile app allows me to manage tasks on-the-go. I highly recommend it to any consultancy looking to improve productivity and customer service.",
    name: "Alex Johnson",
    title: "Director",
    organization: "Non-Profit Org",
    image: "https://cmst.xyz/css/v2/image/mr.prakash.jpeg"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full p-6">
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  {/* You can add an SVG icon here if needed */}
                </svg>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                  <p className="text-gray-600">{testimonial.organization}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
