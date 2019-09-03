const path        = require('path');
const withPlugins = require('next-compose-plugins');
const withSass    = require('@zeit/next-sass');

let config = {
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

module.exports = withPlugins([
  [withSass, {cssModules: true}],
], config);
