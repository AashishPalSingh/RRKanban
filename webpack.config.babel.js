const { resolve } = require('path');
import webpack from 'webpack';
const { getIfUtils } = require('webpack-config-utils');
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env => {
  const { ifProd } = getIfUtils(env);
  return {
    context: resolve('src'),
    entry: './index.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      libraryTarget: 'umd',
        library: 'UIPBoard'
    },
    devtool: ifProd('source-map', 'eval'),
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: './index.html',
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: true
    })
    ],
    optimization: {
      minimizer: [
          new UglifyJsPlugin({
              sourceMap: true
          })
      ]
  },
    module: {
      rules: [
        /**
         * JS Loader. Run all JS files though babel.
         */
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  };
};
