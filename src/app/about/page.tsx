import Link from 'next/link';
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Factory-Direct Speed Meets European Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RapidLanyard bridges the gap between Asian manufacturing efficiency and European service standards. 
              When conferences can&apos;t wait and expos have fixed dates, RapidLanyard delivers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded to solve the event industry&apos;s biggest pain point - missed deadlines - we&apos;ve streamlined 
                every step from quote to delivery. Our direct factory relationships enable 3-day delivery across 
                EU and US markets, while our flexible approach means no order is too small or too urgent.
              </p>
              <p className="text-lg text-gray-600">
                We understand that event organizers work under intense pressure with non-negotiable deadlines. 
                That&apos;s why we&apos;ve built our entire operation around speed, reliability, and transparency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose RapidLanyard?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-teal-500 text-xl mr-3">⚡</span>
                  <div>
                    <strong className="text-gray-900">3-Day Delivery Guarantee</strong>
                    <p className="text-gray-600">Never miss another event deadline</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 text-xl mr-3">🏭</span>
                  <div>
                    <strong className="text-gray-900">Factory-Direct Quality Control</strong>
                    <p className="text-gray-600">No middleman markup or quality compromises</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 text-xl mr-3">📏</span>
                  <div>
                    <strong className="text-gray-900">Flexible MOQs</strong>
                    <p className="text-gray-600">From 50 to 50,000 pieces - we accommodate all events</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 text-xl mr-3">🇪🇺</span>
                  <div>
                    <strong className="text-gray-900">European Service Standards</strong>
                    <p className="text-gray-600">Professional communication and reliable support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Quality & Certifications</h2>
            <p className="text-xl text-gray-600">Professional standards you can trust</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-gray-600">Quality Management System</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">OEKO-TEX</h3>
              <p className="text-gray-600">Certified sustainable materials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">CE Marking</h3>
              <p className="text-gray-600">European compliance standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sustainable</h3>
              <p className="text-gray-600">Eco-friendly manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-white mb-8">Join thousands of satisfied event organizers who trust RapidLanyard</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-teal-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              GET YOUR QUOTE
            </Link>
            <a 
              href="https://wa.me/905455812613?text=Hi! I'd like to learn more about RapidLanyard's services and get a quote." 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-500 transition-colors"
            >
              WHATSAPP US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}