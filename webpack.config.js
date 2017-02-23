const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  }
//  ,
//  plugins: [
//    new webpack.optimize.UglifyJsPlugin({minimize:true})
//  ]
};

module.exports = config;