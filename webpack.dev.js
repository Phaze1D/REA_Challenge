var common = require('./webpack.common.js')

common.devServer = {
  host: 'localhost',
  port: 3000,
  publicPath: '/',
  hot: true,
}

module.exports = common
