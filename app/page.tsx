import Link from 'next/link';
import ImageCarousel from '../components/ImageCarousel';
import TestFlightSignup from '../components/TestFlightSignup';

// Import videos
import part1Video from '../public/videos/part1_appstore.mov';
import part2Video from '../public/videos/part2_appstore.mov';

const carouselItems = [
  { type: 'video' as const, src: part1Video, alt: 'App preview video 1' },
  { type: 'video' as const, src: part2Video, alt: 'App preview video 2' },
  { type: 'image' as const, src: '/IMG_3336_resized.PNG', alt: 'App screenshot 1', width: 1170, height: 2532 },
  { type: 'image' as const, src: '/IMG_3337_resized.PNG', alt: 'App screenshot 2', width: 1170, height: 2532 },
  { type: 'image' as const, src: '/IMG_FE3E2E19372D-1_resized.jpeg', alt: 'App screenshot 3', width: 1170, height: 2532 },
  { type: 'image' as const, src: '/IMG_FB85C18C77B9-1_resized.jpeg', alt: 'App screenshot 4', width: 1170, height: 2532 },
  { type: 'image' as const, src: '/IMG_338CE4DCCE73-1_resized.jpeg', alt: 'App screenshot 5', width: 1170, height: 2532 },
  { type: 'image' as const, src: '/IMG_2DBDC34C407E-1_resized.jpeg', alt: 'App screenshot 6', width: 1170, height: 2532 },
  { type: 'image' as const, src: '/IMG_06710D2CCE4B-1_resized.jpeg', alt: 'App screenshot 7', width: 1170, height: 2532 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold text-gray-900">What Made You Happy Today?</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Train your brain to find joy in the little things. Capture your daily moments
            with photos, voice notes, and text. After 30 moments, get a beautiful printed
            photobook delivered to your door.
          </p>
          <div className="pt-4">
            <TestFlightSignup />
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative py-8">
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
