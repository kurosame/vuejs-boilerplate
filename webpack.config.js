const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const stylelint = require('stylelint')
const Copy = require('copy-webpack-plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const HardSource = require('hard-source-webpack-plugin')
const Html = require('html-webpack-plugin')
const StyleLint = require('stylelint-webpack-plugin')

module.exports = (env, argv) => ({
  entry: {
    bundle: path.join(__dirname, 'src', 'index.ts')
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    open: true,
    port: 8000,
    proxy: {
      '/api/*': 'http://localhost:3000'
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
              loaders: {
                ts: 'ts-loader!tslint-loader'
              },
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
    new HardSource(),
    new Html({
      template: path.join(__dirname, 'dist', 'vendor.html')
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
