const Copy = require('copy-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    bundle: [
      './src/index.html',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
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
        test: /index\.js$/,
        use: [{
          loader: 'string-replace-loader',
          query: {
            search: 'GIT_COMMIT_HASH_PLACE_HOLDER',
            replace: `${process.env.GIT_COMMIT_HASH}`
          }
        }]
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
                search: '<!--scriptsVendor-->',
                replace: `<script src=\"/vendor.js?${process.env.GIT_COMMIT_HASH}\"></script>`
              },
              {
                search: '<!--scripts-->',
                replace: `<script src=\"/bundle.js?${process.env.GIT_COMMIT_HASH}\"></script>`
              }
            ]
          }
        }]
      },
      {
        test: /\.css$/,
        use: ExtractText.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
    new ExtractText('bundle.css')
  ],
  resolve: {
    extensions: ['.js', '.vue']
  },
  devtool: '#inline-source-map'
}
