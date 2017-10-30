require('babel-polyfill');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: ['babel-polyfill', './src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'commonjs2',
    filename: '[name].js',
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['syntax-flow', 'transform-flow-strip-types'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
    }),
  ],
};
