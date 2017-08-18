var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.html?$/,
        use: {
          loader: 'file-loader',
          options: {name: '[name].[ext]'}
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
}
