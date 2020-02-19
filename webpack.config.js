const os = require('os')
const path = require('path')
const autoprefixer = require('autoprefixer')
const Copy = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const Stylelint = require('stylelint-webpack-plugin')
const HardSource = require('hard-source-webpack-plugin')
const Html = require('html-webpack-plugin')

module.exports = (_, argv) => ({
  entry: {
    bundle: path.join(__dirname, 'src', 'index.ts')
  },
  output: {
    filename: '[name]-[hash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
    }
  },
  devServer: {
    contentBase: 'dist',
    historyApiFallback: true,
    proxy: {
      '/api/*': 'http://localhost:3000'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader', 'eslint-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              // workers: require('os').cpus().length - 1
              workers: 1
            }
          },
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
              happyPackMode: true
            }
          },
          'eslint-loader'
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
              plugins: [autoprefixer()]
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
        ignore: ['.gitkeep']
      }
    ]),
    new VueLoaderPlugin(),
    new ForkTsChecker({ checkSyntacticErrors: true, vue: true }),
    new Stylelint({ files: ['**/*.vue'] }),
    new HardSource(),
    new Html({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.vue', '.js', '.ts'],
    alias: { '@': path.join(__dirname, 'src') }
  },
  devtool: argv.mode === 'development' ? '#inline-source-map' : false
})
