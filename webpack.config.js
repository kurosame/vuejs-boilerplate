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
    historyApiFallback: true,
    open: true,
    port: 8000,
    proxy: {
      '/api/*': 'http://mock.example.jp:8001'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            loaders: {
              js: 'babel-loader!eslint-loader'
            },
            postcss: [
              cssnext(),
              stylelint()
            ],
            esModule: false
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
                replace: `<script src=\"/vendor.js?${new Date().getTime()}\"></script>`
              },
              {
                search: '<!-- scripts -->',
                replace: `<script src=\"/bundle.js?${new Date().getTime()}\"></script>`
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
          ~module.resource.indexOf('node_modules')
        )
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    process.env.NODE_ENV === 'production' ?
    new webpack.optimize.UglifyJsPlugin() :
    () => {}
  ],
  resolve: {
    extensions: ['.vue', '.js'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  devtool: '#inline-source-map'
}
