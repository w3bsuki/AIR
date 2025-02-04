/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    typedRoutes: false // Disable for now
  }
}

module.exports = nextConfig 