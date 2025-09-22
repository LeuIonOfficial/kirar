'use client';

import { useState, useEffect } from 'react';

import { ShimmerButton } from '@/registry/magicui/shimmer-button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About Us', id: 'about' },
    { name: 'Boreal', id: 'featured-projects' },
    { name: 'Jigawa', id: 'featured-projects' },
    { name: 'Other Activities', id: 'how-we-work' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 transition-all duration-300 ${
      isScrolled
        ? 'py-4 bg-black/30 backdrop-blur-lg shadow-lg'
        : 'py-6 bg-transparent'
    }`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white font-semibold text-xl tracking-wide">KIRAR</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full px-2 py-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
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
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </ShimmerButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-md z-40">
          {/* Close button */}
          <button
            className="absolute top-6 right-4 text-white p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col h-full pt-24 px-4 pb-8">
            <div className="flex flex-col space-y-2 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left px-4 py-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 text-lg cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <ShimmerButton
                className="w-full text-lg py-4 cursor-pointer"
                background="rgba(255, 255, 255, 0.1)"
                shimmerColor="#ffffff"
                shimmerSize="0.08em"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </ShimmerButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}