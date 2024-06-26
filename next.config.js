const path = require('path');

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
 
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig;
