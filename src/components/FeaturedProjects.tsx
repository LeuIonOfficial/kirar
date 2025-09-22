'use client';

import Image from 'next/image';
import { ShimmerButton } from '@/registry/magicui/shimmer-button';

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="bg-gray-50 py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
            <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">Our Projects</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
            Featured Projects
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We support a select number of projects with ecological integrity and strong community benefits.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Boreal Project */}
          <div className="relative group cursor-pointer">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              {/* Background Image for Boreal */}
              <Image
                src="/images/featured-projects/boreal-project.svg"
                alt="Boreal forest project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
                  Boreal
                </h3>

                <ShimmerButton
                  className="group/btn font-medium text-base flex items-center space-x-3"
                  background="rgba(13, 148, 136, 0.8)"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                >
                  <span>Explore Project</span>
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ShimmerButton>
              </div>
            </div>
          </div>

          {/* Jigawa Project */}
          <div className="relative group cursor-pointer">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              {/* Background Image for Jigawa */}
              <Image
                src="/images/featured-projects/jigawa-project.svg"
                alt="Jigawa forest project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
                  Jigawa
                </h3>

                <ShimmerButton
                  className="group/btn font-medium text-base flex items-center space-x-3"
                  background="rgba(13, 148, 136, 0.8)"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                >
                  <span>Explore Project</span>
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}