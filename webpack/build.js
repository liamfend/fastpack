// const fs = require('fs')
const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config.back')

const compiler = Webpack(webpackConfig)

const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
})

const server = new WebpackDevServer(devServerOptions, compiler)

server.listen(3000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3000')
})
