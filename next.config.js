/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure LFS files are handled correctly
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|mov)$/i,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig
