'use strict'

const gulp = require('gulp')
const shell = require('gulp-shell')

module.exports = gulp.task('cpAssets',
  shell.task('docker cp ./dist/ oahu-assets:/srv/')
);
