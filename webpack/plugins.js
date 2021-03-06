const path = require('path')

module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~webpack': './src/webpack',
          '~client': './src/',
          '~pages': path.resolve(process.cwd(), 'src/pages'),
          '~constants': './src/constants',
          '~components': './src/components',
          '~modules': './src/modules',
          '~actions': './src/actions',
          '~reducers': './src/reducers',
          '~hocs': './src/hocs',
          '~helpers': './src/helpers',
          '~settings': './src/settings',
          '~translations': './src/resources/translations',
        },
      },
    ],
  ],
}
