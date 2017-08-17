var common = require('./webpack.common.js')

common.devServer = {
  host: 'localhost',
  port: 3000,
  publicPath: '/',
  hot: true,
}

modules.exports = common
