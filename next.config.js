/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: '/mentions-legales',
        destination: '/',
        permanent: false,
      },
      {
        source: '/politique-confidentialite',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig; 