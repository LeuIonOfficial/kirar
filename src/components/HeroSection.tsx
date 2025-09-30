"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/forest-background.svg"
          alt="Forest background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-tight">
            <span className="block">Kinetic International</span>
            <span className="block">
              Regenerative Agriculture & Reforestation
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We partner with carefully vetted carbon projects to regenerate
            ecosystems,
            <br className="hidden md:block" />
            improve livelihoods, and scale lasting impact.
          </p>

          {/* CTA Button */}
          <ShimmerButton
            className="group mx-auto font-medium text-base flex items-center space-x-3"
            background="rgba(0, 0, 0, 0.3)"
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
          >
            <span>Explore Our Projects</span>
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className={`transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center text-white/60">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40 mb-2"></div>
            <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
