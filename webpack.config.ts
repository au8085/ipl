// webpack.config.js

const path = require('path');

module.exports = {
  // other webpack config options...
  module: {
    rules: [
      {
        test: /\.(mp3|wav)$/, // Add other audio file extensions if needed
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert files < 8kb to base64 strings
              name: '[name].[ext]',
              outputPath: 'public/themesong/', // Output directory for audio files
            },
          },
        ],
      },
    ],
  },
};
