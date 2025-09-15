import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';

export default function YoyoBadgesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Yoyo Keychain & Badge Reels</h1>
          <p className="text-xl text-gray-600 mb-8">Retractable badge solutions for easy access</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-48 relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/productimages/YOYO2.jpeg"
                  alt="Yoyo Badge Reels - Retractable Badge Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Yoyo Badge Reels</h3>
              <p className="text-gray-600 mb-6">Retractable badge reels with customizable designs for professional use</p>
              <Link href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">Get Quote</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-48 relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/productimages/AKSESUAR.jpeg"
                  alt="Professional Badge Accessories - Event Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Badge Accessories</h3>
              <p className="text-gray-600 mb-6">Complete range of professional badge accessories and attachments</p>
              <Link href="/contact" className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}