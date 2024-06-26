/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
 
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    
  },
  // outras configurações conforme necessário
};

module.exports = nextConfig;
