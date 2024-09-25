import React from 'react';
import { ArrowRightIcon } from 'lucide-react';

export default function Component() {
  return (
    <div className="mx-auto p-6 bg-white" style={{ marginTop: '60px' }}>
      <h1 className="text-3xl font-bold text-center mb-2">
        How CMST Helps You <span className="bg-green-200 px-2 py-1 rounded">Perform 2x</span>
      </h1>
      <p className="text-center text-gray-600 mb-8">
        CMST has all the tools you need for a full digital integration in your company
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          imageSrc="https://cmst.xyz/css/v2/image/easy-to-use.png"
          title="Ridiculously Easy To Use"
          description="One of the reasons why CMST is so loved is because of its simplicity and how easy to use it is. With a great productive experience, we have managed to keep it packed with all the necessary features as well as make it really simple to use them."
        />
        <FeatureCard
          imageSrc="https://cmst.xyz/css/v2/image/focus-communication.png"
          title="Focused On Communication"
          description="CMST brings your whole team to one place. Always stay up to date with chat, comments, notes, tasks and other important features."
        />
        <FeatureCard
          imageSrc="https://cmst.xyz/css/v2/image/organize-data.png"
          title="Organize Your Data Beautifully"
          description="Imagine a typical office desk or shelf: sometimes it can get messy with a lot of documents, papers and what not. That's not a problem with CMST as you can easily manage your data using tags, categories, filters and other services."
        />
      </div>
      
      <div className="mt-8 text-right">
        <a href="#" className="inline-flex items-center text-green-500 hover:text-green-600 font-semibold">
          Check out more features
          <ArrowRightIcon className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

function FeatureCard({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-green-100 rounded-full p-4 mb-4">
        <img src={imageSrc} alt={title} className="w-16 h-16" />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-green-600">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
