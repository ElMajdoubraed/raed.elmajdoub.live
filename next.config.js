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
