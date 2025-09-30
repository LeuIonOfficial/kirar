"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { ShimmerButton } from "@/registry/magicui/shimmer-button";

interface GeoFeature {
  rsmKey: string;
  [key: string]: unknown;
}

export default function ConnectWithUs() {
  const locations = [
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      coordinates: [-3.435973, 55.378051] as [number, number],
      labelCoords: [-20, 40] as [number, number],
      labelWidth: 135,
    },
    {
      name: "Mongolia",
      flag: "🇲🇳",
      coordinates: [103.846656, 46.862496] as [number, number],
      labelCoords: [-20, 20] as [number, number],
      labelWidth: 100,
    },
    {
      name: "UAE",
      flag: "🇦🇪",
      coordinates: [53.847818, 23.424076] as [number, number],
      labelCoords: [-20, 10] as [number, number],
      labelWidth: 80,
    },
    {
      name: "Nigeria",
      flag: "🇳🇬",
      coordinates: [8.6753, 9.082] as [number, number],
      labelCoords: [-20, 10] as [number, number],
      labelWidth: 90,
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
            <span className="text-teal-500 text-sm font-medium uppercase tracking-wider">
              Locations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12">
            Our Footprint
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Our company guides global projects and partnerships to deliver
            global climate impact.
          </p>

          <ShimmerButton
            className="group mx-auto font-medium text-base flex items-center space-x-3"
            background="rgba(31, 41, 55, 1)"
            shimmerColor="#ffffff"
            shimmerSize="0.1em"
          >
            <span>Contact Us</span>
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

        {/* World Map Section */}
        <div className="relative w-full">
          <div className="relative aspect-[2/1] bg-white overflow-hidden">
            <ComposableMap
              projectionConfig={{
                scale: 250,
                center: [0, 10],
              }}
              style={{
                width: "100%",
                height: "100%",
                background: "white",
              }}
            >
              <Geographies geography="/features.json">
                {({ geographies }: { geographies: GeoFeature[] }) =>
                  geographies.map((geo: GeoFeature) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#90a4ae"
                      stroke="#78909c"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              {/* Location Markers */}
              {locations.map((location, index) => (
                <Marker key={index} coordinates={location.coordinates}>
                  <g>
                    {/* Pin Point */}
                    <circle
                      r={6}
                      fill="#14b8a6"
                      stroke="#fff"
                      strokeWidth={3}
                    />
                    {/* Pin Line */}
                    <line
                      x1={0}
                      y1={-6}
                      x2={0}
                      y2={-35}
                      stroke="#14b8a6"
                      strokeWidth={3}
                    />

                    {/* Location Label */}
                    <g transform="translate(0, -40)">
                      <rect
                        x={-40}
                        y={-15}
                        width={location.labelWidth}
                        height={24}
                        fill="white"
                        stroke="#e5e7eb"
                        strokeWidth={1}
                        rx={12}
                        filter="drop-shadow(0 4px 8px rgba(0,0,0,0.15))"
                      />
                      <text
                        textAnchor="middle"
                        y={-1}
                        fontSize={12}
                        fontWeight={500}
                        fill="#374151"
                      >
                        <tspan x={location.labelCoords[0]} y={2} fontSize={14}>
                          {location.flag}
                        </tspan>
                        <tspan
                          x={location.labelCoords[1]}
                          fontSize={11}
                          fontWeight={600}
                        >
                          {location.name}
                        </tspan>
                      </text>
                    </g>
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </div>
        </div>
      </div>
    </section>
  );
}
