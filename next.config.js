/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.uniqlo.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ],
  },
  ...removeImports,
}

module.exports = nextConfig
