"use client";

import { ShimmerButton } from "@/registry/magicui/shimmer-button";

export default function AboutSection() {
  const scrollToHowWeWork = () => {
    const element = document.getElementById("how-we-work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
            <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">
              About Us
            </span>
          </div>

          {/* Main Content */}
          <div className="relative">
            <div className="text-3xl md:text-4xl leading-relaxed text-gray-900 font-light max-w-5xl mx-auto">
              We partner with trusted carbon initiatives, offering consulting
              and connections to restore{" "}
              <span className="text-gray-400">ecosystems,</span>
              <br className="hidden md:block" />
              <span className="text-gray-400">
                uplift communities, and drive climate action.
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <ShimmerButton
              className="group mx-auto font-medium text-base flex items-center space-x-3 cursor-pointer"
              background="rgba(31, 41, 55, 1)"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
              onClick={scrollToHowWeWork}
            >
              <span>Explore More About Us</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </ShimmerButton>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="text-center border-r border-gray-200 last:border-r-0 pr-8 md:pr-12">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
              500k+
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
              Restoring hectares
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center border-r border-gray-200 last:border-r-0 pr-8 md:pr-12">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
              30k+
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
              Improving lives
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
              50m+
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
              Removing t/CO2e
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
