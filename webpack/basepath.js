const fs = require('fs')
const appBase = fs.realpathSync(process.cwd())

module.exports = appBase
