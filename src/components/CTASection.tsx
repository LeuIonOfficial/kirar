'use client';

import Image from 'next/image';
import { ShimmerButton } from '@/registry/magicui/shimmer-button';

export default function CTASection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            {/* Forest background */}
            <Image
              src="/images/cta/forest-partnership.svg"
              alt="Forest partnership background"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Bokeh/blur effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
              <div className="absolute top-20 right-20 w-24 h-24 bg-green-400/15 rounded-full blur-2xl"></div>
              <div className="absolute bottom-10 left-1/4 w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-green-300/15 rounded-full blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 bg-yellow-200/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8 md:px-12 lg:px-16">
            {/* Section Label */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
              <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">Contact Us</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
              Let&apos;s Work Together
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Whether you represent an organization, an investor, or a community partner, we&apos;re here to create
              impact together. Let&apos;s connect and explore how we can accelerate climate action side by side.
            </p>

            {/* CTA Button */}
            <ShimmerButton
              className="group mx-auto font-medium text-lg flex items-center space-x-3 shadow-lg"
              background="rgba(13, 148, 136, 1)"
              shimmerColor="#ffffff"
              shimmerSize="0.1em"
            >
              <span>Contact Us</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
    </section>
  );
}