const path = require('path');
// const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/pages/main.js",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  module: {
    // rules: [
    //
    // ],
    loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['env'],
            },
        },
    ],
  },
  plugins: [
      new NodemonPlugin(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
