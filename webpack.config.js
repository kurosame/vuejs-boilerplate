const path = require('path')
const webpack = require('webpack')
const apiMocker = require('webpack-api-mocker')
const autoprefixer = require('autoprefixer')
const stylelint = require('stylelint')
const Copy = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const Html = require('html-webpack-plugin')
const AddAssetHtml = require('add-asset-html-webpack-plugin')
const StyleLint = require('stylelint-webpack-plugin')

module.exports = (_, argv) => ({
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
        use: ['vue-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
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
          'tslint-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer(), stylelint()]
            }
          },
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Copy([
      {
        from: path.join(__dirname, 'assets'),
        to: path.join(__dirname, 'dist', 'assets'),
        ignore: '.gitkeep'
      }
    ]),
    new VueLoaderPlugin(),
    new ForkTsChecker({ tslint: true, vue: true }),
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
