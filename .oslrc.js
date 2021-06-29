module.exports = {
  babel: {
    presets: [['@babel/preset-env'], '@babel/preset-react'],
    plugins: [],
  },
  resolve: {
    alias: {
      '@pages': 'src/pages',
      '~global-css': 'src/css',
      '~webpack': 'src/webpack',
      '~client': 'src/',
      '~pages': 'src/pages',
      '~constants': 'src/constants',
      '~components': 'src/components',
      '~modules': 'src/modules',
      '~actions': 'src/actions',
      '~reducers': 'src/reducers',
      '~hocs': 'src/hocs',
      '~helpers': 'src/helpers',
      '~settings': 'src/settings',
      '~translations': 'src/resources/translations',
    },
    fallback: {},
  },
  webpackPlugins: [], // 支持函数 webpackPlugins: (webpackEnv)=>{}
}

/**
 * 后续添加 scss module 命名规则 等等配置
 *
 */
