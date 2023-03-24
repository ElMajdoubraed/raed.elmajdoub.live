/** @type {import('next').NextConfig} */

const config = {
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
const runtimeCaching = require('next-pwa/cache.js');

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  disable: false,
  runtimeCaching
})(
  config
);

module.exports = nextConfig
