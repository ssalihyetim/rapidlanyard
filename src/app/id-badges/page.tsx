import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function IdBadgesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">ID Badge Holders</h1>
          <p className="text-xl text-gray-600 mb-8">Professional badge protection solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-48 relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/productimages/softcardholder1.jpeg"
                  alt="Soft Card Holders - Professional Badge Protection"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Soft Card Holders</h3>
              <p className="text-gray-600 mb-6">Flexible plastic badge holders for comfortable daily use</p>
              <Link href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">Get Quote</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-48 relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/productimages/softcardholder2.jpeg"
                  alt="Professional Card Holders - Premium Quality"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Professional Card Holders</h3>
              <p className="text-gray-600 mb-6">Premium quality badge holders with enhanced durability and clear visibility</p>
              <Link href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}