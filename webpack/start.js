//再怎么敲命令都不允许覆盖😈
process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

require('./env')
const webpack = require('webpack')
// const WebpackDevServer = require('webpack-dev-server')
// const configFactory = require('../config/webpack.config')
// const createDevServerConfig = require('../config/webpackDevServer.config')
const webpackConfig = require('./webpack.config')
const devServerConfig = require('./webpack-dev-server.config')
const WebpackDevServer = require('webpack-dev-server')
const clear = require('console-clear')

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000
//const HOST = process.env.HOST || '0.0.0.0'

const configOptions = webpackConfig('development')

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
//clear()
const devServerOptions = Object.assign({}, devServerConfig, {
  //  open: true,
  port: DEFAULT_PORT,
})
const server = new WebpackDevServer(compiler, devServerOptions)

compiler.hooks.invalid.tap('invalid', () => {
  console.log('Compiling...')
})

var isFirstCompiler = true

server.listen(3000, 'localhost', err => {
  if (err) {
    return console.log(err)
  }
  console.log('Starting server on http://localhost:3000')
})

compiler.hooks.done.tap('done', async stats => {
  console.log(JSON.stringify(process.env))
  console.log('over')
})
;['SIGINT', 'SIGTERM'].forEach(function (sig) {
  process.on(sig, function () {
    devServer.close()
    process.exit()
  })
})
process.on('unhandledRejection', err => {
  throw err
})
