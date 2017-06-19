require('babel-polyfill');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    entry: {
        'sogeti': [ 'babel-polyfill', './src/index.js' ],
        'sogeti.min': [ 'babel-polyfill', './src/index.js' ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'commonjs2',
        filename: '[name].js'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['syntax-flow', 'transform-flow-strip-types']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
