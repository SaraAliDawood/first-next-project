/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Add localhost for image hosting
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
};

module.exports = nextConfig;
