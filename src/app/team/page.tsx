"use client";

import { useState } from "react";
import Image from "next/image";

export default function TeamPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "With 15+ years in sustainable development, Sarah leads our vision for regenerative climate action.",
      image: "/images/team/member-1.svg",
      linkedin: "#",
    },
    {
      name: "Michael Chen",
      role: "Director of Reforestation",
      bio: "Former forest ecologist with expertise in large-scale restoration projects across Asia and Africa.",
      image: "/images/team/member-2.svg",
      linkedin: "#",
    },
    {
      name: "Dr. Amara Okafor",
      role: "Head of Community Partnerships",
      bio: "PhD in Environmental Justice, specializing in community-led conservation initiatives.",
      image: "/images/team/member-3.svg",
      linkedin: "#",
    },
    {
      name: "James Anderson",
      role: "Chief Financial Officer",
      bio: "Former investment banker now dedicated to financing sustainable development projects globally.",
      image: "/images/team/member-4.svg",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      role: "Regenerative Agriculture Lead",
      bio: "Agronomist with 12 years experience implementing regenerative farming practices worldwide.",
      image: "/images/team/member-5.svg",
      linkedin: "#",
    },
    {
      name: "David Martinez",
      role: "Carbon Projects Manager",
      bio: "Expert in carbon credit verification and climate finance with certifications from leading standards.",
      image: "/images/team/member-6.svg",
      linkedin: "#",
    },
    {
      name: "Elena Volkov",
      role: "Research & Development Director",
      bio: "Environmental scientist focused on innovative solutions for biodiversity conservation.",
      image: "/images/team/member-7.svg",
      linkedin: "#",
    },
    {
      name: "Omar Hassan",
      role: "Field Operations Manager",
      bio: "On-the-ground expert coordinating projects across multiple continents with local teams.",
      image: "/images/team/member-8.svg",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/forest-background.svg"
            alt="Team background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 md:px-8 lg:px-16 max-w-5xl mx-auto py-20">
          <div className="flex items-center justify-center mb-8">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
            <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">
              Our Team
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white mb-6 leading-tight">
            Meet the People Behind <br className="hidden md:block" />
            Our Mission
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together decades of experience in
            environmental conservation, sustainable development, and community
            empowerment.
          </p>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-white py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate professionals committed to creating lasting environmental
              and social impact
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4] shadow-lg transition-all duration-500 group-hover:shadow-2xl">
                  {/* Member Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl text-white/20">
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  {/* Overlay with Bio */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500 ${
                      hoveredMember === index
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {member.bio}
                      </p>
                      <a
                        href={member.linkedin}
                        className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        Connect
                      </a>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-teal-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="mt-20 text-center bg-gray-50 rounded-3xl p-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who want to make a
              difference in environmental conservation and community development.
            </p>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Get in Touch</span>
              <svg
                className="w-5 h-5 ml-2"
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
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
