'use strict'

const gulp = require('gulp')
const Server = require('karma').Server

module.exports = gulp.task('test', (done) => {
  new Server({
    configFile: `${__dirname}/../../${config.paths.test.karmaConfig}`
  }, done).start()
})
