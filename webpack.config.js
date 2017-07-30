const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './Datepicker.vue',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'Datepicker.js',
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },

  plugins: (isDevelopment ? [] : [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ]).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(isDevelopment || 'production'),
    }),
  ]),
};
