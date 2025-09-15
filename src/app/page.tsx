import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Shorter and more focused */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-900 py-16 text-center">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
            3-Day Custom Lanyards Delivery to EU & US
          </h1>
          <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
            Factory-Direct Pricing • Flexible MOQs from 50 pieces • Professional Event Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              GET YOUR QUOTE
            </Link>
            <a 
              href="https://wa.me/905455812613?text=Hi! I need a quote for custom lanyards with 3-day delivery." 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Trusted by Leading Companies - References */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Proudly Trusted By</h2>
            <p className="text-gray-600">Leading companies worldwide choose RapidLanyard for their event needs</p>
          </div>
          
          {/* Sliding Logo Container */}
          <div className="relative">
            <div className="flex space-x-12 animate-scroll">
              {/* First set of logos */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/THY.png"
                    alt="Turkish Airlines - Event Solutions Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/ABB.png"
                    alt="ABB - Professional Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/BMW.jpeg"
                    alt="BMW - Premium Event Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/LC.png"
                    alt="LC - Corporate Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/dominos.png"
                    alt="Domino's - Event Branding Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/UEFA.jpeg"
                    alt="UEFA - Sports Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/byd-logo-transparent.png"
                    alt="BYD - Automotive Event Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/ikealogo.png"
                    alt="IKEA - Retail Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/cambridgelogo.png"
                    alt="Cambridge - Educational Event Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-12 items-center min-w-max">
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/THY.png"
                    alt="Turkish Airlines - Event Solutions Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/ABB.png"
                    alt="ABB - Professional Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/BMW.jpeg"
                    alt="BMW - Premium Event Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/LC.png"
                    alt="LC - Corporate Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/dominos.png"
                    alt="Domino's - Event Branding Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/UEFA.jpeg"
                    alt="UEFA - Sports Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/byd-logo-transparent.png"
                    alt="BYD - Automotive Event Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/ikealogo.png"
                    alt="IKEA - Retail Event Partner"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-20 w-40 bg-white rounded-lg shadow-sm border border-gray-100 p-4 grayscale hover:grayscale-0 hover:shadow-md transition-all duration-300">
                  <Image
                    src="/cambridgelogo.png"
                    alt="Cambridge - Educational Event Solutions"
                    width={120}
                    height={60}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Fade overlay for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600">Professional event accessories with rapid delivery</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lanyards */}
            <Link 
              href="/lanyards" 
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/LanyardMain.jpeg"
                  alt="Custom Lanyards - Professional event lanyards with rapid delivery"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Custom Lanyards</h3>
                <p className="text-gray-600 mb-4">Knitted, Satin, and Recycled options with digital printing capabilities</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">From $0.11</span>
                  <span className="text-sm text-blue-600 font-medium group-hover:underline">View Products →</span>
                </div>
              </div>
            </Link>
            
            {/* ID Badges */}
            <Link 
              href="/id-badges" 
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/cardholdersmain.jpg"
                  alt="ID Badge Holders - Professional plastic and PVC badge holders"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">ID Badges & Holders</h3>
                <p className="text-gray-600 mb-4">Plastic and PVC badge holders for professional identification</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">From $0.08</span>
                  <span className="text-sm text-blue-600 font-medium group-hover:underline">View Products →</span>
                </div>
              </div>
            </Link>
            
            {/* Wristbands */}
            <Link 
              href="/wristbands" 
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/wristbandmain.png"
                  alt="Custom Wristbands - Event identification solutions"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Custom Wristbands</h3>
                <p className="text-gray-600 mb-4">Comfortable and secure event identification solutions</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">From $0.15</span>
                  <span className="text-sm text-blue-600 font-medium group-hover:underline">View Products →</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Product Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {/* Yoyo Badges */}
            <Link 
              href="/yoyo-badges" 
              className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/yoyoMain.jpeg"
                  alt="Badge Reels & Yoyo Keychains - Retractable badge solutions"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Badge Reels & Yoyo Keychains</h3>
                <p className="text-gray-600 mb-4">Retractable badge solutions for easy access and security</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-green-600">From $0.25</span>
                  <span className="text-sm text-blue-600 font-medium group-hover:underline">View Products →</span>
                </div>
              </div>
            </Link>

            {/* Custom Solutions */}
            <Link 
              href="/contact" 
              className="group bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-200 hover:transform hover:-translate-y-1"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="/customMain.jpeg"
                  alt="Custom Solutions - Tailored event accessories"
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Custom Solutions</h3>
                <p className="text-blue-100 mb-4">Need something specific? We create custom event accessories tailored to your needs</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">Custom Quote</span>
                  <span className="text-sm text-blue-100 font-medium group-hover:underline">Get Quote →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose RapidLanyard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Why Choose RapidLanyard?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Professional event solutions with the speed and quality you need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quality */}
            <div className="text-center bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Factory-Direct Quality</h3>
              <p className="text-gray-600">Premium materials and manufacturing with no middleman markup</p>
            </div>

            {/* Speed */}
            <div className="text-center bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3-Day Guarantee</h3>
              <p className="text-gray-600">Never miss another event deadline with our rapid delivery promise</p>
            </div>

            {/* Flexibility */}
            <div className="text-center bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible MOQs</h3>
              <p className="text-gray-600">From 50 to 50,000 pieces - we accommodate events of all sizes</p>
            </div>

            {/* Service */}
            <div className="text-center bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Service</h3>
              <p className="text-gray-600">European service standards with dedicated support team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Simple 3-Step Process</h2>
            <p className="text-lg text-gray-600">From quote to delivery in just 3 days</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Request Quote</h3>
              <p className="text-gray-600">Tell us your requirements or upload your design files. We respond within 2 hours.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Approve & Order</h3>
              <p className="text-gray-600">Review your custom quote and place your order with our secure payment system.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Receive your professional event accessories within 3 days, guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied customers who trust RapidLanyard for their event success</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              GET YOUR QUOTE NOW
            </Link>
            <a 
              href="https://wa.me/905455812613?text=Hi! I'd like to learn more about RapidLanyard's services and get a quote." 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              WHATSAPP US
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
                className="h-10 w-auto mb-4 bg-white p-2 rounded"
              />
              <p className="text-gray-300 mb-4">3-day delivery to EU & US</p>
              <p className="text-gray-300">Factory-direct pricing</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/lanyards" className="text-gray-300 hover:text-blue-400 transition-colors">Lanyards</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Get Quote</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/lanyards" className="text-gray-300 hover:text-blue-400 transition-colors">Custom Lanyards</Link></li>
                <li><Link href="/id-badges" className="text-gray-300 hover:text-blue-400 transition-colors">ID Badge Holders</Link></li>
                <li><Link href="/wristbands" className="text-gray-300 hover:text-blue-400 transition-colors">Wristbands</Link></li>
                <li><Link href="/yoyo-badges" className="text-gray-300 hover:text-blue-400 transition-colors">Badge Reels</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2">
                <li><a href="https://wa.me/905455812613" className="text-gray-300 hover:text-blue-400 transition-colors">+90 545 581 26 13</a></li>
                <li><a href="mailto:yetimsalih1@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">yetimsalih1@gmail.com</a></li>
                <li className="text-blue-400 font-bold mt-4">3-Day Delivery EU & US</li>
                <li className="text-blue-400 font-bold">Factory-Direct Pricing</li>
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