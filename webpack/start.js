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

compiler.hooks.invalid.tap('invalid', () => {
  clear()
  console.log('Compiling...')
})

compiler.hooks.done.tap('done', async stats => {
  clear()
  server.listen(3000, '127.0.0.1', () => {
    console.log('Starting server on http://localhost:3000')
  })
  //   const delayedMsg = setTimeout(() => {
  //     console.log(
  //       chalk.yellow(
  //         'Files successfully emitted, waiting for typecheck results...'
  //       )
  //     );
  //   }, 100);

  //   const messages = await tsMessagesPromise;
  //   clearTimeout(delayedMsg);
  //   if (tscCompileOnError) {
  //     statsData.warnings.push(...messages.errors);
  //   } else {
  //     statsData.errors.push(...messages.errors);
  //   }
  //   statsData.warnings.push(...messages.warnings);

  //   // Push errors and warnings into compilation result
  //   // to show them after page refresh triggered by user.
  //   if (tscCompileOnError) {
  //     stats.compilation.warnings.push(...messages.errors);
  //   } else {
  //     stats.compilation.errors.push(...messages.errors);
  //   }
  //   stats.compilation.warnings.push(...messages.warnings);

  //   if (messages.errors.length > 0) {
  //     if (tscCompileOnError) {
  //       devSocket.warnings(messages.errors);
  //     } else {
  //       devSocket.errors(messages.errors);
  //     }
  //   } else if (messages.warnings.length > 0) {
  //     devSocket.warnings(messages.warnings);
  //   }

  //   if (isInteractive) {
  //     clearConsole();
  //   }
  // }

  // const messages = formatWebpackMessages(statsData);
  // const isSuccessful = !messages.errors.length && !messages.warnings.length;
  // if (isSuccessful) {
  //   console.log(chalk.green('Compiled successfully!'));
  // }
  // if (isSuccessful && (isInteractive || isFirstCompile)) {
  //   printInstructions(appName, urls, useYarn);
  // }
  // isFirstCompile = false;

  // If errors exist, only show errors.
  // if (messages.errors.length) {
  //   // Only keep the first error. Others are often indicative
  //   // of the same problem, but confuse the reader with noise.
  //   if (messages.errors.length > 1) {
  //     messages.errors.length = 1;
  //   }
  //   console.log(chalk.red('Failed to compile.\n'));
  //   console.log(messages.errors.join('\n\n'));
  //   return;
  // }

  // Show warnings if no errors were found.
  // if (messages.warnings.length) {
  //   console.log(chalk.yellow('Compiled with warnings.\n'));
  //   console.log(messages.warnings.join('\n\n'));

  //   // Teach some ESLint tricks.
  //   console.log(
  //     '\nSearch for the ' +
  //       chalk.underline(chalk.yellow('keywords')) +
  //       ' to learn more about each warning.'
  //   );
  //   console.log(
  //     'To ignore, add ' +
  //       chalk.cyan('// eslint-disable-next-line') +
  //       ' to the line before.\n'
  //   );
  // }
})
