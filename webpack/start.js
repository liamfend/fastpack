// const fs = require('fs')
const webpack = require('webpack')
// const WebpackDevServer = require('webpack-dev-server')
// const configFactory = require('../config/webpack.config')
// const createDevServerConfig = require('../config/webpackDevServer.config')
const webpackConfig = require('./webpack.config')
const WebpackDevServer = require('webpack-dev-server')
const clear = require('console-clear')

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
const HOST = process.env.HOST || '0.0.0.0'

const configOptions = webpackConfig({
  development: true,
})
const compiler = webpack(configOptions)

// compiler.run((err, stats) => {
//   if (err) {
//     process.stdout.write(err.toString() + '/n')
//   }
//   if (stats) {
//     process.stdout.write(stats.toString() + '/n')
//   }

//   compiler.close(closeErr => {
//     // ...
//   })
// })

// const watching = compiler.watch(
//   {
//     // Example [watchOptions](/configuration/watch/#watchoptions)
//     aggregateTimeout: 300,
//     poll: undefined,
//   },
//   (err, stats) => {
//     // [Stats Object](#stats-object)
//     // Print watch/build result here...
//     // console.log(stats)
//   },
// )
clear()
const devServerOptions = Object.assign({}, configOptions.devServer, {
  //  open: true,
})
const server = new WebpackDevServer(compiler, devServerOptions)

server.listen(3000, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:3000')
})
