const os = require('os')
const path = require('path')
const autoprefixer = require('autoprefixer')
const ForkTsChecker = require('fork-ts-checker-webpack-plugin')
const Stylelint = require('stylelint-webpack-plugin')
const HardSource = require('hard-source-webpack-plugin')

module.exports = {
  module: {
    rules: [
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
    new ForkTsChecker({ checkSyntacticErrors: true, vue: true }),
    new Stylelint({ files: ['**/*.vue'] }),
    new HardSource()
  ],
  resolve: {
    extensions: ['.vue', '.js', '.ts'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '../src')
    }
  }
}
