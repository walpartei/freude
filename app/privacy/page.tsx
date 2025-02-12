export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <section className="prose prose-gray max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: February 12, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600">
                Welcome to Moments. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we handle your data when you use our app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Photos you choose to add to the app</li>
                <li>Voice recordings for transcription</li>
                <li>Location data (optional, only if enabled)</li>
                <li>Device information for app functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use your information solely for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Creating and storing your moments</li>
                <li>Transcribing voice recordings to text</li>
                <li>Enhancing your app experience</li>
                <li>Providing location context to your moments (if enabled)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Storage and Security</h2>
              <p className="text-gray-600">
                All your data is stored locally on your device. We do not collect or store your personal 
                information on our servers. Your privacy is important to us, and we&apos;ve designed the app 
                to keep your data under your control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Access your data stored in the app</li>
                <li>Delete your data from the app</li>
                <li>Enable or disable location services</li>
                <li>Control app permissions through your device settings</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@moments-app.com" className="text-blue-600 hover:text-blue-800">
                  privacy@moments-app.com
                </a>
              </p>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
