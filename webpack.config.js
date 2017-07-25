const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'dist.js',
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'source-map'
};