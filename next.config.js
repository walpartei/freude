/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Enable static file serving
  assetPrefix: '',
  basePath: '',
  trailingSlash: false,
}

module.exports = nextConfig
