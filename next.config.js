/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['www.whatmadeyouhappy.today'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.whatmadeyouhappy.today',
      },
    ],
  },
}

module.exports = nextConfig
