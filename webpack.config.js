let path = require('path');
let webpack = require('webpack');
let HWP = require('html-webpack-plugin');
let config = {
  mode: 'development',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    client: path.resolve(__dirname,'') + '/index.js'
  },
  plugins: [
    new HWP({
      template: 'index.ejs',
      inject: 'body',
      filename:"../index.html"
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias:{
      Utils: path.resolve(__dirname,'Utils'),
      Store: path.resolve(__dirname,'Store')
    }
  },
  output:{
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
            plugins: [require('babel-plugin-transform-runtime')]
          }
        }
      }
    ]
  }
};

module.exports = config;
