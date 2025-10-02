"use client";

import Image from "next/image";

export default function BeyondCarbonProjects() {

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
                <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">
                  Other Activities
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12">
                Beyond Carbon Projects
              </h2>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We are deeply committed to supporting those affected by
                humanitarian crises worldwide. As part of this commitment, we
                pledge to donate 5% of our profits to organisations providing
                critical aid, relief, and long-term support in times of urgent
                need. By dedicating a portion of our success to these causes, we
                aim not only to provide immediate assistance but also to help
                rebuild lives and strengthen communities facing extraordinary
                challenges. Standing with humanity in its most vulnerable
                moments is not just part of our mission—it is part of who we
                are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
