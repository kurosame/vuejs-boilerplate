'use strict'

const gulp = require('gulp')
const runSequence = require('run-sequence');

module.exports = gulp.task('watch', () => {
  gulp.watch(`${config.paths.src.app}/**`, () => {
    if (environment === 'docker') {
      runSequence('webpack', 'cpAssets')
    } else {
      gulp.start('webpack')
    }
  })
})
