const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: ['axios', 'vue', 'vue-router', 'vuex', 'vuex-router-sync']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]_library'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}
