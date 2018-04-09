const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const stylelint = require('stylelint')
const Copy = require('copy-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const HardSource = require('hard-source-webpack-plugin')
const Html = require('html-webpack-plugin')
const StyleLint = require('stylelint-webpack-plugin')

module.exports = {
  entry: {
    vendor: './dist/vendor.js',
    bundle: './src/index.ts'
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
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
              postcss: [
                autoprefixer({
                  browsers: ['last 2 versions', 'IE 11']
                }),
                stylelint()
              ]
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
    new ForkTsChecker(),
    new HardSource(),
    new Html({
      filename: 'index.html',
      template: '!!html-loader!./src/index.html'
    }),
    new StyleLint(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    process.env.NODE_ENV === 'production'
      ? new webpack.optimize.UglifyJsPlugin()
      : () => {},
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/vendor-manifest.json')
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.ts'],
    alias: { '@': path.resolve(__dirname, 'src') }
  },
  devtool: '#inline-source-map'
}
