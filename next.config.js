/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/usdf',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.habbo.com'],
  },
}

// next.config.js
const intercept = require('intercept-stdout');

intercept((text) => (text.includes('Duplicate atom key') ? '' : text));

module.exports = nextConfig
