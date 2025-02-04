/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  experimental: {
    typedRoutes: true  // Re-enable since we're using Next.js 14.2.23
  }
}

module.exports = nextConfig 