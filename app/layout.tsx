import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freude App Privacy Policy",
  description: "Privacy policy for Freude - What made you happy today?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-gray-900">Freude</span>
              </a>
            </div>
            <div className="flex gap-x-12">
              <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
                Home
              </a>
              <a href="/privacy" className="text-sm font-semibold leading-6 text-gray-900">
                Privacy
              </a>
              <a href="/support" className="text-sm font-semibold leading-6 text-gray-900">
                Support
              </a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
