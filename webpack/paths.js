const path = require('path')
const fs = require('fs')

const moduleFileExtensions = ['js', 'jsx', 'ts', 'tsx', 'json'] //留着以后做成通用库后，支持 配置 和 ts

const resolveModule = filePath => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(path.resolve(`${filePath}.${extension}`)),
  )

  if (extension) {
    return path.resolve(`${filePath}.${extension}`)
  }

  return path.resolve(`${filePath}.js`)
}

const appBase = fs.realpathSync(process.cwd())
const appOutputBuild = path.resolve(appBase, 'build')
const appSrcJs = resolveModule(path.resolve(appBase, 'src/index'))
const appSrc = path.resolve(appBase, 'src')
const appPublic = path.resolve(appBase, 'public')
const appHtmlTemp = path.resolve(appBase, 'public/index.html')
const envFile = path.resolve(appBase, '.env')
const appPublicPath = ''
module.exports = {
  appBase,
  appOutputBuild,
  appSrcJs,
  appSrc,
  appPublic,
  envFile,
  appHtmlTemp,
  appPublicPath,
}
