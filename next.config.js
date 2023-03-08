/** @type {import('next').NextConfig} */
const path = require('path');

const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, 'env/.env') });

module.exports = {
  webpack(config) {
    // Alias
    config.resolve.alias['@'] = path.join(__dirname, '');

    // Plugins
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, 'env/.env'),
        systemvars: true,
      }),
    ];
    return config;
  },
};
