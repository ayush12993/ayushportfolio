// webpack.config.js

const path = require('path');

module.exports = {
  // other webpack configuration options...

  resolve: {
    fallback: {
      "fs": false,
      "os": false,
      "util": false
    }
  }
};
