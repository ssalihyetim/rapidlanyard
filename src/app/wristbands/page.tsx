import Link from 'next/link';
import Header from '@/components/Header';

export default function WristbandsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Custom Wristbands</h1>
          <p className="text-xl text-gray-600 mb-8">Comfortable event identification solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl mb-4">⌚</div>
              <h3 className="text-2xl font-semibold mb-4">Fabric Wristbands</h3>
              <p className="text-gray-600 mb-6">Comfortable fabric wristbands for events</p>
              <Link href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">Get Quote</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-semibold mb-4">Security Wristbands</h3>
              <p className="text-gray-600 mb-6">Tamper-proof wristbands with security features</p>
              <Link href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">Get Quote</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-semibold mb-4">Custom Design</h3>
              <p className="text-gray-600 mb-6">Fully customizable wristbands with your branding</p>
              <Link href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}