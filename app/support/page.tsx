import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freude Support",
  description: "Get support and provide feedback for Freude - What made you happy today?",
};

export default function Support() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Support</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
          <form 
            action="https://formspree.io/l@lll.uno" 
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select
                name="subject"
                id="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a topic</option>
                <option value="bug">Report a Bug</option>
                <option value="feature">Feature Request</option>
                <option value="account">Account Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">FAQ</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I create a photo book?</h3>
              <p className="text-gray-600">
                Photo books are automatically created when you collect enough happy moments. Keep adding moments, and we&apos;ll notify you when your book is ready!
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Is my data private?</h3>
              <p className="text-gray-600">
                Yes! Your data is stored locally on your device. We take privacy seriously - check out our <a href="/privacy" className="text-blue-600 hover:underline">privacy policy</a> for more details.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">How do I export my data?</h3>
              <p className="text-gray-600">
                You can export your data anytime through the app settings. Your memories are always under your control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
