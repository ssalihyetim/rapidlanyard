'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
              <Image
                src="/logo-transparent.png"
                alt="RapidLanyard - Custom Lanyards with 3-Day Delivery"
                width={160}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">Home</Link>
            <Link href="/lanyards" className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">Lanyards</Link>
            <Link href="/id-badges" className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">ID Badges</Link>
            <Link href="/wristbands" className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">Wristbands</Link>
            <Link href="/yoyo-badges" className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">Yoyo Badges</Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">About</Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">Contact</Link>
          </nav>
          
          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              GET A QUOTE
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-2"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 bg-white">
              <Link 
                href="/" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/lanyards" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Lanyards
              </Link>
              <Link 
                href="/id-badges" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ID Badges
              </Link>
              <Link 
                href="/wristbands" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wristbands
              </Link>
              <Link 
                href="/yoyo-badges" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Yoyo Badges
              </Link>
              <Link 
                href="/about" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 pt-2">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full text-center block transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  GET A QUOTE
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}