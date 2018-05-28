const path = require('path')
const webpack = require('webpack')
const apiMocker = require('webpack-api-mocker')
const autoprefixer = require('autoprefixer')
const stylelint = require('stylelint')
const Copy = require('copy-webpack-plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const Html = require('html-webpack-plugin')
const AddAssetHtml = require('add-asset-html-webpack-plugin')
const StyleLint = require('stylelint-webpack-plugin')

module.exports = (env, argv) => ({
  entry: {
    bundle: path.join(__dirname, 'src', 'index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    before(app) {
      apiMocker(app, path.join(__dirname, 'mock.js'), {
        proxy: {
          '/api/*': 'http://localhost:3000'
        },
        changeHost: true
      })
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              postcss: [autoprefixer(), stylelint()]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory'
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          },
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.join(
                __dirname,
                'node_modules',
                '.cache',
                'cache-loader'
              )
            }
          },
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Copy([{ from: 'assets', to: 'assets' }]),
    new ForkTsChecker(),
    new Html({
      template: path.join(__dirname, 'src', 'index.html'),
      hash: true
    }),
    new AddAssetHtml({
      filepath: path.join(__dirname, 'dist', 'vendor.js'),
      hash: true,
      includeSourcemap: false
    }),
    new StyleLint(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, 'dist', 'vendor-manifest.json'))
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.ts'],
    alias: { '@': path.join(__dirname, 'src') }
  },
  devtool: argv.mode === 'development' ? '#inline-source-map' : false
})
