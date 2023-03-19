/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "www.countries-ofthe-world.com",
      "plus.unsplash.com",
    ],
  },
};

module.exports = nextConfig
