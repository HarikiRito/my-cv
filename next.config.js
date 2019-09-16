const path               = require('path');
const withPlugins        = require('next-compose-plugins');
const withSass           = require('@zeit/next-sass');
const withBundleAnalyzer = require('@next/bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';

let config = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = withPlugins([
  [
    withSass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]__[hash:base64:5]',
    },
  },
  ], [
    withBundleAnalyzer, {
      enable: process.env.ANALYZE === 'true',
    },
  ],
], config);
