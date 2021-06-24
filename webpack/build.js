// const fs = require('fs')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')
const devServerConfig = require('./webpack-dev-server.config')

const compiler = Webpack(webpackConfig)

const devServerOptions = Object.assign({}, devServerConfig, {
  open: true,
})

const server = new WebpackDevServer(devServerOptions, compiler)

// server.listen(devServerOptions.port, '127.0.0.1', () => {
//   console.log('Starting server on http://localhost:' + devServerOptions.port)
// })
