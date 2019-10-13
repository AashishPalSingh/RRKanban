const { resolve } = require('path');
const { getIfUtils } = require('webpack-config-utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env => {
  const { ifProd } = getIfUtils(env);
  return {
    context: resolve('src'),
    entry: './index.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist',
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
    ],
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
