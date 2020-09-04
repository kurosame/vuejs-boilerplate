module.exports = {
  hooks: {
    'pre-commit': [
      'tsc -p ./ --noEmit',
      'vtc --workspace ./src',
      'lint-staged'
    ].join(' && ')
  }
}
