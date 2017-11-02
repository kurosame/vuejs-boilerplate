'use strict'

const gutil = require('gulp-util')
const fs = require('fs')
const argv = require('yargs').argv
const tasks = fs.readdirSync('./gulp/tasks/')

require('./config')

// --release flag when executing a task
global.release = argv.release

// argv.environment [production, staging, development, mock, qa]
global.environment = argv.environment

gutil.log(`global.environment = ${environment}`)

tasks.forEach((task) => {
  require(`./tasks/${task}`)
})
