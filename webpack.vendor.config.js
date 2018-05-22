const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['axios', 'vue', 'vue-router', 'vuex']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
