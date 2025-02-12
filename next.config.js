/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: 'export',
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
  // Ensure all assets are copied
  distDir: 'out',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

module.exports = nextConfig
