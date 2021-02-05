const withImages = require('next-images');
const { withPlugins } = require('next-compose-plugins');

const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config
  }
}

module.exports = withPlugins([withImages],nextConfig);