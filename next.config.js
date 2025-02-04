/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    typedRoutes: false
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 