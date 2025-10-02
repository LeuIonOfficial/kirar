"use client";

import Image from "next/image";

export default function HowWeWork() {
  const workItems = [
    {
      title: "Reforestation",
      description:
        "Restoring degraded land and creating new forests to boost biodiversity and capture CO₂.",
      imageSrc: "/images/how-we-work/reforestation.svg",
    },
    {
      title: "Regenerative Agriculture",
      description:
        "Building sustainable livelihoods and empowering local communities through education, training, and economic opportunities.",
      imageSrc: "/images/how-we-work/community-resilience.svg",
    },
    {
      title: "Partnerships",
      description:
        "Preserving existing forests and protecting biodiversity through conservation initiatives and sustainable management practices.",
      imageSrc: "/images/how-we-work/forest-protection.svg",
    },
  ];

  return (
    <section id="how-we-work" className="bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
            <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">
              What We Do
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12">
            How We Work
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We collaborate with high-integrity carbon initiatives to drive
            impactful climate action through
          </p>
        </div>

        {/* Work Items Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                {/* Background Image */}
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500"></div>

                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col p-6 md:p-8">
                  {/* Top space for title when hovered */}
                  <div className="flex-1 flex items-start opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white transform transition-all duration-500 group-hover:scale-105 group-hover:text-shadow-lg translate-y-4 group-hover:translate-y-0">
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom Section - Contains everything at bottom */}
                  <div className="space-y-4">
                    {/* Description - Only visible on hover, at bottom */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-6 group-hover:translate-y-0">
                      <p className="text-white/90 leading-relaxed text-sm md:text-base backdrop-blur-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Title and Button row */}
                    <div className="flex justify-between items-end">
                      {/* Title - Initially at bottom, hidden on hover */}
                      <div className="flex-1 group-hover:opacity-0 transition-all duration-500">
                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white transform transition-all duration-500 translate-y-0 group-hover:translate-y-4">
                          {item.title}
                        </h3>
                      </div>

                      {/* Toggle Button - Always bottom right */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-teal-600 group-hover:bg-teal-500 rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-0 shadow-lg group-hover:shadow-xl">
                          <div className="relative w-4 h-4">
                            {/* Horizontal line (always visible, full width) */}
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 transition-all duration-300"></div>
                            {/* Vertical line (hidden on hover) */}
                            <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white transform -translate-x-1/2 transition-all duration-300 group-hover:opacity-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle border highlight on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
