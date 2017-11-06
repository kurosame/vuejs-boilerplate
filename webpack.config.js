const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')
const stylelint = require('stylelint')
const Copy = require('copy-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const StyleLint = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
    bundle: [
      './src/index.html',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    port: 8000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            esModule: false,
            postcss: [
              cssnext(),
              stylelint()
            ],
            cssModules: {
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true
            }
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$|\.js$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        test: /index\.html$/,
        use: [{
          loader: 'string-replace-loader',
          query: {
            multiple: [
              {
                search: '<!-- scriptsVendor -->',
                replace: `<script src=\"/vendor.js?${process.env.GIT_COMMIT_HASH}\"></script>`
              },
              {
                search: '<!-- scripts -->',
                replace: `<script src=\"/bundle.js?${process.env.GIT_COMMIT_HASH}\"></script>`
              }
            ]
          }
        }]
      }
    ]
  },
  plugins: [
    new Copy([
      {
        from: 'assets',
        to: 'assets'
      }
    ]),
    new Clean(['dist/**/*'], {
      root: `${__dirname}/..`,
      verbose: false
    }),
    new StyleLint(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf('node_modules') !== -1
        )
      }
    })
  ],
  resolve: {
    extensions: ['.vue', '.js']
  },
  devtool: '#inline-source-map'
}
