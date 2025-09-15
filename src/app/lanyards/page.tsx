'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import { SpeedIcon, FlexibilityIcon } from '@/components/Icons';
import SimpleQuoteForm from '@/components/SimpleQuoteForm';
import { useState } from 'react';

export default function LanyardsPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const galleryImages = [
    {
      src: '/productimages/Lanyard.jpeg',
      alt: 'Premium Knitted Plain Lanyard - Custom Event Lanyards',
      title: 'Premium Knitted Lanyards'
    },
    {
      src: '/productimages/Lanyard1.jpeg',
      alt: 'Custom Lanyard Variations - Professional Event Solutions',
      title: 'Lanyard Variations'
    },
    {
      src: '/productimages/Lanyard2.jpeg',
      alt: 'Custom Printed Lanyards - High Quality Event Accessories',
      title: 'Printed Lanyards'
    },
    {
      src: '/productimages/Lanyard5.jpeg',
      alt: 'Professional Lanyard Quality - Corporate Event Solutions',
      title: 'Quality Close-up'
    },
    {
      src: '/productimages/horizontallanyard.jpeg',
      alt: 'Horizontal Lanyard Design - Custom Event Branding',
      title: 'Horizontal Design'
    },
    {
      src: '/productimages/AKSESUAR.jpeg',
      alt: 'Lanyard Accessories and Hardware - Complete Solutions',
      title: 'Lanyard Accessories'
    },
    {
      src: '/productimages/YOYO2.jpeg',
      alt: 'Badge Reel Yo-Yo - Retractable Badge Holders',
      title: 'Badge Reels'
    },
    {
      src: '/productimages/softcardholder1.jpeg',
      alt: 'Soft Card Holder - Flexible Badge Protection',
      title: 'Soft Card Holder 1'
    },
    {
      src: '/productimages/softcardholder2.jpeg',
      alt: 'Soft Card Holder Variations - Professional Badge Solutions',
      title: 'Soft Card Holder 2'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-medium-gray hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-medium-gray" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2 text-gray-900 font-medium">Lanyards</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-hero text-gray-900 mb-4">Custom Lanyards - 3 Day Delivery</h1>
            <p className="text-xl text-medium-gray mb-2">Professional lanyards starting from <span className="text-success font-bold">$0.11</span></p>
            <p className="text-lg text-teal-500 font-semibold">+100 accessory variations available</p>
          </div>
        </div>
      </section>

      {/* Main Content - Left Images, Right Product List */}
      <section className="py-16 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Side: Image Gallery (60% width on large screens) */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Custom Lanyard Gallery</h2>
                
                {/* New Gallery Implementation */}
                <div className="space-y-6">
                  {/* Main Display Image */}
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                    <img
                      src={galleryImages[selectedImage].src}
                      alt={galleryImages[selectedImage].alt}
                      className="w-full h-full object-cover"
                      style={{ 
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded text-sm font-medium">
                      {galleryImages[selectedImage].title}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-2 rounded text-xs">
                      {selectedImage + 1} / {galleryImages.length}
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 relative rounded-md overflow-hidden transition-all duration-200 ${
                          selectedImage === index 
                            ? 'ring-2 ring-teal-500 shadow-lg transform scale-105' 
                            : 'hover:ring-2 hover:ring-gray-300 hover:shadow-md'
                        }`}
                        style={{ width: '80px', height: '60px' }}
                        aria-label={`View ${image.title}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          style={{ 
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                        {selectedImage === index && (
                          <div className="absolute inset-0 bg-teal-500/20"></div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="text-sm font-medium">Previous</span>
                    </button>
                    <button
                      onClick={() => setSelectedImage(selectedImage < galleryImages.length - 1 ? selectedImage + 1 : 0)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <span className="text-sm font-medium">Next</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Quality Features */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <SpeedIcon className="w-4 h-4 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Premium Materials</h4>
                          <p className="text-sm text-gray-600">High-quality polyester construction</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FlexibilityIcon className="w-4 h-4 text-teal-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Custom Printing</h4>
                          <p className="text-sm text-gray-600">Screen printing & digital sublimation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Product List (40% width on large screens) */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-20">
                <h2 className="text-section text-gray-900 mb-6">Lanyard Types</h2>
                
                {/* Knitted Plain Lanyard */}
                <div className="mb-8 p-4 border border-light-gray rounded-lg hover:border-turquoise-500 transition-colors">
                  <h3 className="text-subsection text-teal-500 mb-3">▼ Knitted Plain Lanyard</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-900">• <strong>Material:</strong> Premium woven polyester</p>
                    <p className="text-gray-900">• <strong>Width:</strong> 13mm standard</p>
                    <p className="text-gray-900">• <strong>Colors:</strong> 20+ solid colors available</p>
                    <p className="text-gray-900">• <strong>Best for:</strong> Corporate events, conferences, ID badges</p>
                  </div>
                  <Link href="/contact" className="btn-primary mt-4 w-full text-center block">
                    VIEW DETAILS
                  </Link>
                </div>

                {/* Satin Polyester Plain */}
                <div className="mb-8 p-4 border border-light-gray rounded-lg hover:border-turquoise-500 transition-colors">
                  <h3 className="text-subsection text-teal-500 mb-3">▼ Satin Polyester Plain</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-900">• <strong>Material:</strong> Smooth satin finish</p>
                    <p className="text-gray-900">• <strong>Printing:</strong> Screen printing available</p>
                    <p className="text-gray-900">• <strong>Colors:</strong> Full Pantone range</p>
                    <p className="text-gray-900">• <strong>MOQ:</strong> Starting from 100 pieces</p>
                  </div>
                  <Link href="/contact" className="btn-primary mt-4 w-full text-center block">
                    VIEW DETAILS
                  </Link>
                </div>

                {/* Satin Polyester Digital Printed */}
                <div className="mb-8 p-4 border border-light-gray rounded-lg hover:border-turquoise-500 transition-colors">
                  <h3 className="text-subsection text-teal-500 mb-3">▼ Digital Printed (Sublimated)</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-900">• <strong>Material:</strong> High-quality polyester</p>
                    <p className="text-gray-900">• <strong>Printing:</strong> Full-color sublimation</p>
                    <p className="text-gray-900">• <strong>Design:</strong> Unlimited colors, photo-quality</p>
                    <p className="text-gray-900">• <strong>Best for:</strong> Complex logos, detailed designs</p>
                  </div>
                  <Link href="/contact" className="btn-primary mt-4 w-full text-center block">
                    VIEW DETAILS
                  </Link>
                </div>

                {/* Recycled Polyester Options */}
                <div className="mb-8 p-4 border border-light-gray rounded-lg hover:border-turquoise-500 transition-colors">
                  <h3 className="text-subsection text-teal-500 mb-3">▼ Recycled Polyester</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-gray-900">• <strong>Material:</strong> Eco-friendly recycled polyester</p>
                    <p className="text-gray-900">• <strong>Sustainability:</strong> 100% recycled material</p>
                    <p className="text-gray-900">• <strong>Options:</strong> Plain & Digital Printed</p>
                    <p className="text-gray-900">• <strong>Quality:</strong> Same durability as virgin materials</p>
                  </div>
                  <Link href="/contact" className="btn-primary mt-4 w-full text-center block">
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lanyard Upgrades Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section text-gray-900 mb-4">Lanyard Upgrades</h2>
            <p className="text-xl text-medium-gray">Professional add-ons for enhanced functionality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Safety Features */}
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-subsection text-gray-900 mb-4">Safety Breakaway</h3>
              <p className="text-medium-gray mb-4">Required for healthcare, schools, and industrial environments</p>
              <ul className="text-sm text-medium-gray space-y-1">
                <li>• Metal breakaway option</li>
                <li>• Plastic breakaway option</li>
                <li>• Safety compliance certified</li>
              </ul>
            </div>

            {/* Functional Upgrades */}
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-subsection text-gray-900 mb-4">Transition Buckle</h3>
              <p className="text-medium-gray mb-4">Easy badge attachment and removal system</p>
              <ul className="text-sm text-medium-gray space-y-1">
                <li>• Quick-release mechanism</li>
                <li>• Multiple attachment points</li>
                <li>• Prevents badge twisting</li>
              </ul>
            </div>

            {/* Custom Attachments */}
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-subsection text-gray-900 mb-4">Custom Hardware</h3>
              <p className="text-medium-gray mb-4">Specialized attachment solutions</p>
              <ul className="text-sm text-medium-gray space-y-1">
                <li>• Split rings</li>
                <li>• Swivel hooks</li>
                <li>• Custom branded hardware</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Showcase */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-section text-teal-500 mb-4">&quot;+100 Variations Available&quot;</h2>
            <p className="text-xl text-medium-gray">Complete your lanyard setup with professional accessories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Badge Holders */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <h3 className="text-subsection text-gray-900 mb-2">Badge Holders</h3>
              <p className="text-medium-gray text-sm mb-4">Soft/Hard plastic options</p>
              <Link href="/id-badges" className="text-teal-500 hover:text-turquoise-600 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
                View Options →
              </Link>
            </div>

            {/* Retractable Reels */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-subsection text-gray-900 mb-2">Retractable Reels</h3>
              <p className="text-medium-gray text-sm mb-4">Badge reel gallery</p>
              <Link href="/yoyo-badges" className="text-teal-500 hover:text-turquoise-600 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
                View Options →
              </Link>
            </div>

            {/* Keychains */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 16l-4 4-4-4 4-4 1.257-1.257A6 6 0 0117 9z" />
                </svg>
              </div>
              <h3 className="text-subsection text-gray-900 mb-2">Keychains</h3>
              <p className="text-medium-gray text-sm mb-4">Branded/Unbranded options</p>
              <Link href="/contact" className="text-teal-500 hover:text-turquoise-600 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
                Get Quote →
              </Link>
            </div>

            {/* Custom Hardware */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-20 h-20 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                </svg>
              </div>
              <h3 className="text-subsection text-gray-900 mb-2">Custom Hardware</h3>
              <p className="text-medium-gray text-sm mb-4">Accessory variations</p>
              <Link href="/contact" className="text-teal-500 hover:text-turquoise-600 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">
                Get Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Get Your Lanyard Quote</h2>
            <p className="text-xl text-gray-600">Choose the quote method that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Simple Form Option */}
            <SimpleQuoteForm />
            
            {/* Detailed Form Option */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Detailed Quote Request</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Complete project specifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Delivery timeline planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Company information & billing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Multiple product types</span>
                </div>
              </div>
              
              <Link
                href="/contact"
                className="w-full bg-white border-2 border-teal-500 text-teal-500 px-8 py-4 rounded-lg font-semibold text-lg text-center block hover:bg-teal-500 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                GO TO DETAILED FORM
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request CTA */}
      <section className="py-16 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-section text-white mb-4">Ready to Order Custom Lanyards?</h2>
          <p className="text-xl text-white mb-8">Get your professional quote in 2 hours • 3-day delivery guarantee</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-light-gray transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-turquoise-500">
              GET LANYARD QUOTE
            </Link>
            <a 
              href="https://wa.me/905455812613?text=Hi! I need a quote for custom lanyards. Please send me pricing for [quantity] pieces with 3-day delivery." 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-500 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-turquoise-500"
            >
              WHATSAPP QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/logo-white-bg.png"
                alt="RapidLanyard - Custom Lanyards with 3-Day Delivery"
                width={160}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-300 mb-4">3-day delivery to EU & US</p>
              <p className="text-gray-300">Factory-direct pricing</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">Home</Link></li>
                <li><Link href="/lanyards" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">Lanyards</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">Get Quote</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/lanyards" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">Custom Lanyards</Link></li>
                <li><Link href="/id-badges" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">ID Badge Holders</Link></li>
                <li><Link href="/wristbands" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">Wristbands</Link></li>
                <li><Link href="/yoyo-badges" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">Badge Reels</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="https://wa.me/905455812613" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">+90 545 581 26 13</a></li>
                <li><a href="mailto:yetimsalih1@gmail.com" className="text-gray-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded">yetimsalih1@gmail.com</a></li>
                <li className="text-teal-500 font-bold">3-Day Delivery EU & US</li>
                <li className="text-teal-500 font-bold">Factory-Direct Pricing</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">© 2025 RapidLanyard. All rights reserved. Professional event solutions with rapid delivery.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}