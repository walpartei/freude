import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">What Made You Happy Today?</h1>
        <p className="text-xl text-gray-600 mb-12">
          Capture and cherish your daily moments of joy
        </p>
        <div className="space-y-4">
          <Link 
            href="/privacy" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </main>
  );
}
