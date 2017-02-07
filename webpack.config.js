require('babel-polyfill');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

module.exports = {
    entry: {
        'sogeti': [ 'babel-polyfill', './lambdas/sogeti.js' ],
        'sogeti.min': [ 'babel-polyfill', './lambdas/sogeti.js' ]
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
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    plugins: ['syntax-flow', 'transform-flow-strip-types']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
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
