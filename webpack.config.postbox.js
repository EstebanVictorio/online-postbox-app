let path = require('path');
let webpack = require('webpack');
let config = {
  mode: 'development',
  target: 'node',
  node: {
    __dirname: true,
    __filename: true
  },
  entry: {
    
  },

  resolve: {
    extensions: ['.js'],
    alias:{
      Utils: path.resolve(__dirname,'Utils'),
      Store: path.resolve(__dirname,'Store')
    }
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
