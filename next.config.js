/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: '',
  basePath: '',
  webpack: (config) => {
    // Handle video files
    config.module.rules.push({
      test: /\.(mov|mp4)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'videos/[name][ext]'
      }
    });
    return config;
  },
  // Copy files from public to out directory
  outputFileTracingIncludes: {
    '/': ['./public/**/*']
  }
}

module.exports = nextConfig
