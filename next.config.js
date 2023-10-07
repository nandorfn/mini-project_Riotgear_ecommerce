/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.uniqlo.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig
