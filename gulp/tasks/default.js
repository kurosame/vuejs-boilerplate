'use strict'

const gulp = require('gulp')
const runSequence = require('run-sequence')

module.exports = gulp.task('default', () => {
  if (release) {
    if (environment === 'development') {
      // dev環境用のリリースビルドでは、ファイル名には .min がつくがミニファイしない
      runSequence(
        'clean',
        ['copy', 'index', 'styles', 'stylesVendor', 'assets', 'lint'],
        'browserifyVendor',
        'browserify'
      );
    } else {
      runSequence(
        'clean',
        ['copy', 'index', 'styles', 'stylesVendor', 'assets', 'lint'],
        'browserifyVendor',
        'browserify',
        ['minify', 'minifyVendor']
      );
    }
  } else {
    if (environment === 'mock') {
      runSequence('webpack', 'watch', 'browserSync')
    } else if (environment === 'test') {
      runSequence('test')
    } else if (environment === 'qa') {
      // http://qa.ixam-creative.jpを利用する.
      // フロントエンド確認用QAチェック用
      runSequence(
        'clean',
        ['index', 'styles', 'stylesVendor', 'assets', 'lint'],
        'browserifyVendor',
        'browserify'
      );
    } else {
      // Docker を利用する場合
      //   API サーバーは Docker での設定次第
      //   管理画面アプリは https://local.ixam-creative.jp
      runSequence(
        // 'clean',
        // ['index', 'styles', 'stylesVendor', 'assets', 'lint'],
        'webpack',
        'cpAssets',
        // ['browserifyVendor', 'watchify', 'watch']
        'watch'
      );
    }
  }
});
