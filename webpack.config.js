const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: { main: './src/app/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist/app'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [ 
    new CleanWebpackPlugin('dist/app', {} ),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/app/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash()
  ]
};