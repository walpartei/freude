import Link from 'next/link';
import ImageCarousel from '../components/ImageCarousel';
import AppStoreButton from '../components/AppStoreButton';

const carouselItems = [
  { type: 'image' as const, src: '/images/screenshot1.png', alt: 'App screenshot 1' },
  { type: 'image' as const, src: '/images/screenshot2.png', alt: 'App screenshot 2' },
  { type: 'image' as const, src: '/images/screenshot3.png', alt: 'App screenshot 3' },
  { type: 'image' as const, src: '/images/screenshot4.png', alt: 'App screenshot 4' },
  { type: 'image' as const, src: '/images/screenshot5.png', alt: 'App screenshot 5' },
  { type: 'image' as const, src: '/images/screenshot6.png', alt: 'App screenshot 6' },
  { type: 'image' as const, src: '/images/screenshot7.png', alt: 'App screenshot 7' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[rgba(255,243,115,0.7)] to-[rgba(178,115,255,0.7)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900">What Made You Happy Today?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Train your brain to find joy in the little things. Capture your daily moments
            with photos, voice notes, and text. After 30 moments, get a beautiful printed
            photobook delivered to your door.
          </p>
          <div className="pt-4">
            <AppStoreButton />
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative py-8 sm:py-16">
          <ImageCarousel items={carouselItems} />
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="text-4xl">📸</div>
            <h3 className="text-xl font-semibold">Capture Moments</h3>
            <p className="text-gray-600">Take photos, record voice notes, or write about what made you smile today.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">🤖</div>
            <h3 className="text-xl font-semibold">Auto-Transcription</h3>
            <p className="text-gray-600">Voice notes are automatically converted to text, making them easy to revisit.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">📚</div>
            <h3 className="text-xl font-semibold">Physical Photobooks</h3>
            <p className="text-gray-600">After 30 moments, get your memories transformed into a beautiful printed book.</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="pt-16 text-center space-x-8">
          <Link 
            href="/privacy" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/support" 
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Support
          </Link>
        </div>
      </div>
    </main>
  );
}