const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
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
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CopyWebpackPlugin([{ from: './public', to: 'assets' }])
  ]
}
