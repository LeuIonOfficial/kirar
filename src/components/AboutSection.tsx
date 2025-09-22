'use client';

import Image from 'next/image';
import { ShimmerButton } from '@/registry/magicui/shimmer-button';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
            <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">About Us</span>
          </div>

          {/* Main Content with Embedded Images */}
          <div className="relative">
            <div className="text-3xl md:text-4xl leading-relaxed text-gray-900 font-light max-w-5xl mx-auto">
              We partner with trusted{' '}
              <span className="inline-flex items-center justify-center mx-2 align-middle">
                <div className="relative w-40 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/about/carbon-initiatives.jpg"
                    alt="Carbon initiatives"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </span>
              {' '}carbon initiatives, offering {' '}
              <br className="hidden md:block" />
              <span className="text-gray-400">consulting and connections to restore</span>{' '}
              <span className="inline-flex items-center justify-center mx-2 align-middle">
                <div className="relative w-40 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/about/ecosystems.jpg"
                    alt="Ecosystems"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </span>
              {' '}<span className="text-gray-400">ecosystems,</span>
              <br className="hidden md:block" />
              <span className="text-gray-400">uplift</span>{' '}
              <span className="inline-flex items-center justify-center mx-2 align-middle">
                <div className="relative w-40 h-20 rounded-full overflow-hidden">
                  <Image
                    src="/images/about/communities.jpg"
                    alt="Communities"
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              </span>
              {' '}<span className="text-gray-400">communities, and drive climate action.</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <ShimmerButton
              className="group mx-auto font-medium text-base flex items-center space-x-3"
              background="rgba(31, 41, 55, 1)"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
            >
              <span>Explore More About Us</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </ShimmerButton>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stat 1 */}
          <div className="text-center border-r border-gray-200 last:border-r-0 pr-8 md:pr-12">
            <div className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4">
              45K
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
              Hectares restored, boosting biodiversity and local livelihoods.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center border-r border-gray-200 last:border-r-0 pr-8 md:pr-12">
            <div className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4">
              2.6M
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
              Empowering communities through sustainable livelihoods.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-4">
              170M
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xs mx-auto">
              Carbon emissions cut through our sustainable projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}