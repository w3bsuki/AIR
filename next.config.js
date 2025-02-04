/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    // Disable static optimization for better build times
    isrMemoryCacheSize: 0,
    serverActions: true,
  },
}

module.exports = nextConfig 