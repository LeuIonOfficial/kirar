"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

import { ShimmerButton } from "@/registry/magicui/shimmer-button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "About Us", id: "about", type: "scroll" },
    { name: "Boreal", href: "/boreal", type: "link" },
    { name: "Jigawa", href: "/jigawa", type: "link" },
    { name: "Other Activities", id: "how-we-work", type: "scroll" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const handleNavigation = (item: any) => {
    // Prevent navigation during SSR
    if (!mounted) return;

    switch (item.type) {
      case "scroll":
        if (pathname === "/") {
          scrollToSection(item.id);
        } else {
          window.location.href = `/#${item.id}`;
          setIsMenuOpen(false);
        }
        break;
      case "link":
        window.location.href = item.href;
        setIsMenuOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-black/30 backdrop-blur-lg shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="text-white font-semibold text-2xl tracking-wide hover:text-white/80 transition-colors duration-200 cursor-pointer"
          >
            KIRAR
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200 text-sm font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Language + Contact */}
        <div className="hidden lg:flex items-center space-x-4">
          <ShimmerButton
            className="text-sm font-medium cursor-pointer"
            background="rgba(255, 255, 255, 0.1)"
            shimmerColor="#ffffff"
            shimmerSize="0.08em"
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </ShimmerButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Modal */}
      {isMenuOpen &&
        mounted &&
        createPortal(
          <>
            {/* Modal backdrop */}
            <div
              className="lg:hidden fixed inset-0 bg-black z-[100] transition-opacity duration-300"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
              }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Modal content */}
            <div
              className="lg:hidden fixed inset-0 z-[101] flex flex-col"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
              }}
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="text-white font-semibold text-2xl tracking-wide hover:text-white/80 transition-colors duration-200 cursor-pointer"
                >
                  KIRAR
                </button>
                <button
                  className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Menu items */}
              <div className="flex-1 flex flex-col justify-center px-6">
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item)}
                      className="block w-full text-left text-white text-3xl font-light hover:text-white/70 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer with contact button */}
              <div className="p-6 border-t border-white/10">
                <ShimmerButton
                  className="w-full text-lg py-4 cursor-pointer"
                  background="rgba(255, 255, 255, 0.1)"
                  shimmerColor="#ffffff"
                  shimmerSize="0.08em"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </ShimmerButton>
              </div>
            </div>
          </>,
          document.body,
        )}
    </nav>
  );
}
