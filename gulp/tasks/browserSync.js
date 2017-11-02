'use strict'

const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const history = require('connect-history-api-fallback')
const proxy = require('http-proxy-middleware')

// apiへのリクエストをプロキシ
const proxies = proxy(config.mock.api.path, {
  target: config.mock.api.target,
  changeOrigin: true,
  logLevel: 'debug'
})

gulp.task('browserSync', () => {
  browserSync.init({
    port: 8000,
    browser: 'Google Chrome',
    server: {
      baseDir: config.paths.dist.app,
      index: config.paths.src.index,
      middleware: [history(), proxies]
    },
    https: true
  })

  gulp.watch(`${config.paths.dist.app}/**`, () => {
    browserSync.reload()
  })
})
