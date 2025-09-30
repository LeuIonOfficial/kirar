"use client";

import Image from "next/image";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";

export default function BorealProject() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/featured-projects/boreal-project.svg"
            alt="Boreal forest project"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 text-center px-4 md:px-8 lg:px-16 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
            Boreal
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Regenerating the world&apos;s largest terrestrial biome through
            sustainable forestry and ecosystem restoration.
          </p>

          <ShimmerButton
            className="group mx-auto font-medium text-base flex items-center space-x-3"
            background="rgba(13, 148, 136, 0.8)"
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
            onClick={() => {
              const element = document.getElementById("project-details");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Learn More About This Project</span>
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
      </section>

      {/* Project Details Section */}
      <section
        id="project-details"
        className="bg-white py-20 px-4 md:px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">
                  Project Overview
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Restoring the Boreal Forest
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The Boreal forest project focuses on large-scale ecosystem
                restoration in one of the world&apos;s most critical carbon storage
                regions. Through sustainable forestry practices and community
                engagement, we&apos;re working to restore degraded areas while
                supporting local livelihoods.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Ecosystem restoration and biodiversity conservation
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Sustainable forestry and carbon sequestration
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Community engagement and economic development
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/featured-projects/boreal-project.svg"
                alt="Boreal forest restoration"
                width={600}
                height={400}
                className="rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
