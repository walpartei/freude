'use client';

export default function AppStoreButton() {
  return (
    <div className="w-full max-w-md mx-auto">
      <a
        href="https://apps.apple.com/de/app/freude/id6738605105?l=en-GB"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.665 13.223c-.001-3.367 2.747-4.487 2.777-4.551-1.513-2.203-3.865-2.505-4.705-2.543-1.997-.201-3.88 1.175-4.9 1.175-1.021 0-2.611-1.148-4.297-1.118-2.204.029-4.248 1.284-5.378 3.252-2.313 4.013-.592 9.954 1.657 13.229.941 1.365 2.065 2.893 3.547 2.833 1.459-.061 2.007-.932 3.772-.932 1.762 0 2.266.932 3.779.902 1.514-.03 2.466-1.384 3.408-2.75.54-.784.76-1.555.771-1.599-.016-.009-2.77-1.062-2.781-4.217zM15.121 4.191c.806-.98 1.352-2.348 1.203-3.721-1.165.046-2.575.78-3.422 1.761-.751.87-1.41 2.245-1.233 3.567 1.294.099 2.609-.64 3.452-1.607z" />
        </svg>
        Download on the App Store
      </a>
      <p className="mt-4 text-sm text-gray-600 text-center">
        Click to download Freude from the App Store
      </p>
    </div>
  );
}