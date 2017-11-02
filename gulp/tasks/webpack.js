'use strict'

const gulp = require('gulp')
const webpackStream = require('webpack-stream')
const webpack = require('webpack')
const webpackConfig = require('../webpack.mock.config')

function handleError() {
  if (!release) this.emit('end')
}

module.exports = gulp.task('webpack', () => {
  return gulp.src(config.paths.src.app)
    .pipe(webpackStream(webpackConfig, webpack))
    .on('error', handleError)
    .pipe(gulp.dest(config.paths.dist.app))
})
