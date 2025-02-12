/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'dist',
  // Ensure all files from public are copied to output
  async exportPathMap(defaultPathMap) {
    return defaultPathMap;
  },
}

module.exports = nextConfig
