/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  async rewrites() {
      return [
          {
              source: '/robots.txt',
              destination: '/api/robots'
          }
      ];
  }
}

const withPWA = require("next-pwa");
module.exports = withPWA({
	pwa: {
		dest: "public",
		register: true,
        disable: process.env.NODE_ENV ===      'development',
		skipWaiting: true,
	},
});

module.exports = nextConfig
