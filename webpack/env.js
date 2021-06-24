const { envFile } = require('./paths')
const fs = require('fs')

const NODE_ENV = process.env.NODE_ENV

if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.')
}

// https://github.com/bkeepers/dotenv#what-other-env-files-can-i-use
const dotenvFiles = [
  `${envFile}.${NODE_ENV}.local`,
  NODE_ENV !== 'test' && `${envFile}.local`,
  `${envFile}.${NODE_ENV}`,
  envFile,
].filter(Boolean)

dotenvFiles.forEach(dotenvFile => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand')(
      require('dotenv').config({
        path: dotenvFile,
      }),
    )
  }
})

// envVariables =
// .config({ path: '/custom/path/to/.env' })
// const result = dotenv.config()

// require('dotenv').config({ path: '/custom/path/to/.env' })
