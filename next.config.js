/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true, // This will skip image optimization for static exports
  },
  output: 'export', // Enable static exports
}

module.exports = nextConfig
