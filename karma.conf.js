const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

// Disable CommonsChunkPlugin
webpackConfig.plugins.splice(webpackConfig.plugins.findIndex(plugin => plugin.chunkNames), 1)

module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      {
        pattern: './test/unit/specs/**/*.js',
        watched: false
      }
    ],
    preprocessors: {
      './test/unit/specs/**/*.js': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage'],
    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    },
    coverageReporter: {
      dir: './test/unit/coverage',
      reporters: [
        { type: 'text-summary' },
        { type: 'html' }
      ]
    },
    client: {
      captureConsole: false
    }
  })
}
