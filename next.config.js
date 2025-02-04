/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    typedRoutes: false
  }
}

module.exports = nextConfig 