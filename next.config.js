/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: '',
  basePath: '',
  // Configure webpack to handle video files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mov|mp4)$/i,
      type: 'asset/resource'
    });
    return config;
  },
}

module.exports = nextConfig
