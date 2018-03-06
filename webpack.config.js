const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js']
  },
  output: {
    // options related to how webpack emits results

    path: path.resolve(__dirname, 'dist'),
    // the target directory for all output files

    publicPath: '/',
    // the url to the output directory resolved relative to the HTML page

    filename: '[name].js'
    // the filename template for entry chunks
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)

    extensions: ['*', '.js', '.jsx'],
    // extensions that are used

    modules: ['node_modules', path.resolve(__dirname, 'src')]
    // directories where to look for modules
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([{ from: './public', to: 'assets' }])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true, // enable gzip compression
    historyApiFallback: true // true for index.html upon 404, object for multiple paths
  }
}
