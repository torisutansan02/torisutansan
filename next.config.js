// next.config.js
require('dotenv').config({ path: '.env.local' });

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 0,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
