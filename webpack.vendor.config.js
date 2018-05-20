const path = require('path')
const webpack = require('webpack')
const Html = require('html-webpack-plugin')

module.exports = {
  entry: {
    vendor: ['axios', 'vue', 'vue-router', 'vuex']
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    library: '[name]_library'
  },
  plugins: [
    new Html({
      filename: 'vendor.html',
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
