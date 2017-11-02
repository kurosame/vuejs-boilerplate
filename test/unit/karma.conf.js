const webpack = require('webpack')
const webpackConfig = require('../../gulp/webpack.config')

module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      '../../node_modules/babel-polyfill/dist/polyfill.js',
      '../../src/**/*.vue',
      '../../src/**/*.js',
      {
        pattern: 'specs/**/*.js',
        watched: false
      }
    ],
    preprocessors: {
      '../../src/**/*.vue': ['webpack'],
      '../../src/**/*.js': ['webpack'],
      'specs/**/*.js': ['webpack', 'sourcemap']
    },
    proxies: {
      '/api': 'http://local.oahu.jp:8087/api'
    },
    reporters: ['spec', 'coverage'],
    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'text-summary' },
        { type: 'html' }
      ]
    }
  })
}
