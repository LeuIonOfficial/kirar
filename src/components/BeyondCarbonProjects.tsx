'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function BeyondCarbonProjects() {
  const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({ 0: true }); // First item expanded by default

  const accordionItems = [
    {
      title: 'Climate Resilience Consulting',
      description: 'Advisory services to help communities and organizations adapt to climate change and implement sustainable practices.',
      icon: '🌊'
    },
    {
      title: 'Ecosystem Restoration',
      description: 'Comprehensive restoration programs to rebuild degraded ecosystems and enhance biodiversity.',
      icon: '🌱'
    },
    {
      title: 'Renewable Energy Solutions',
      description: 'Development and implementation of clean energy solutions for sustainable community development.',
      icon: '⚡'
    }
  ];

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                {/* Background Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/images/beyond-carbon/carbon-projects.svg"
                    alt="Beyond carbon projects"
                    fill
                    className="object-cover"
                  />
                  {/* Image overlay to represent environmental scene */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-center text-white/80">
                      <div className="text-6xl mb-4">🌱</div>
                      <p className="text-lg font-light">Tree Planting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* Section Header */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">Other Activities</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
                Beyond Carbon Projects
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Beyond our core projects, we provide advisory services, build partnerships,
                and share insights that drive climate action at scale.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between text-left group hover:text-teal-600 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-teal-500 text-xl">
                        {item.icon}
                      </div>
                      <span className="text-xl md:text-2xl font-light text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-6 h-6 transform transition-transform duration-300 ${
                        expandedItems[index] ? 'rotate-180' : 'rotate-0'
                      }`}>
                        <svg
                          className="w-full h-full text-gray-400 group-hover:text-teal-600 transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedItems[index]
                      ? 'max-h-32 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-gray-600 leading-relaxed pl-12">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}