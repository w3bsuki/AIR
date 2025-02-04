/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    // Remove deprecated options
    typedRoutes: true
  }
}

module.exports = nextConfig 