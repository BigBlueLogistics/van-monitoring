/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.wav/,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;
