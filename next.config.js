/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Copy all files from public to out directory
  distDir: 'out',
  trailingSlash: true,
  assetPrefix: '',
}

module.exports = nextConfig
