const webpackConfig = require('./webpack.config')

module.exports = config => {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/babel-polyfill/dist/polyfill.js',
      './dist/vendor.js',
      {
        pattern: './test/unit/specs/**/*.+(js|ts)',
        watched: false
      }
    ],
    preprocessors: {
      './test/unit/specs/**/*.+(js|ts)': ['webpack', 'sourcemap']
    },
    reporters: ['spec', 'coverage'],
    browsers: ['PhantomJS'],
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    },
    coverageReporter: {
      dir: './test/unit/coverage',
      reporters: [{ type: 'text-summary' }, { type: 'html' }]
    },
    client: {
      captureConsole: false
    }
  })
}
