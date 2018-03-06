const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    })
  ]
})
