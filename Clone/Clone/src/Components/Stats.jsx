import React from 'react';

const stats = [
  { icon: 'fa fa-users', value: '3000+', label: 'Users' },
  { icon: 'fa fa-desktop', value: '500K+', label: 'Monthly visits' },
  { icon: 'fa fa-building', value: '500+', label: 'Companies' },
  { icon: 'fa fa-clipboard-check', value: '350K+', label: 'Applicants' },
  { icon: 'fa fa-upload', value: '15K+', label: 'Visa Processed' },
  { icon: 'fa fa-envelope', value: '500K+', label: 'SMS Sent' },
  { icon: 'fa fa-clock', value: '3', label: 'Years of Service' },
  { icon: 'fa fa-thumbs-up', value: '100%', label: 'Positive Feedback' },
];

export default function CMSTStats() {
  return (
    <div className="bg-green-500 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          CMST is proven to work. The numbers don't lie!
        </h2>
        <p className="text-center mb-8 sm:mb-12 max-w-xl md:max-w-3xl mx-auto text-sm md:text-base">
          Over the years, CMST has been used by thousands of users from hundreds of companies to drastically improve their productivity and ultimately their success rates.
        </p>

        {/* First Row of Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 relative">
          {stats.slice(0, 4).map((stat, index) => (
            <div key={index} className={`flex flex-col items-center text-center p-8 relative`}>
              <i
                className={`${stat.icon} w-12 h-12 mb-4 text-white`}
                style={{ fontSize: '3rem', lineHeight: '1', display: 'inline-block' }}
                aria-hidden="true"
              ></i>
              <span className="text-xl sm:text-2xl font-bold mb-2">{stat.value}</span>
              <span className="text-xs sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Second Row of Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 relative">
          {stats.slice(4).map((stat, index) => (
            <div key={index + 4} className={`flex flex-col items-center text-center p-8 relative`}>
              <i
                className={`${stat.icon} w-12 h-12 mb-4 text-white`}
                style={{ fontSize: '3rem', lineHeight: '1', display: 'inline-block' }}
                aria-hidden="true"
              ></i>
              <span className="text-xl sm:text-2xl font-bold mb-2">{stat.value}</span>
              <span className="text-xs sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
