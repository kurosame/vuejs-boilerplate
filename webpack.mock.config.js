const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfig = require('./webpack.config')

module.exports = merge(webpackConfig, {
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: config.filenames.build.scriptsVendor,
      minChunks: (module) => {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf('node_modules') !== -1
        )
      }
    })
  ],
  devtool: '#inline-source-map'
})
