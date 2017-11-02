const Copy = require('copy-webpack-plugin')
const ExtractText = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    bundle: [
      `bootstrap-webpack!${__dirname}/bootstrap.config.js`,
      `font-awesome-webpack!${__dirname}/font-awesome.config.js`,
      `${__dirname}/../node_modules/babel-polyfill/dist/polyfill.js`,
      `${__dirname}/../${config.paths.src.index}`,
      `${__dirname}/../${config.paths.src.entries}`
    ]
  },
  output: {
    filename: '[name].js'
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
            search: `${config.bundle.replace.gitCommitHash}`,
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
                replace: `<script src=\"/${config.filenames.build.scriptsVendor}.js?${process.env.GIT_COMMIT_HASH}\"></script>`
              },
              {
                search: '<!--scripts-->',
                replace: `<script src=\"/${config.filenames.build.scripts}.js?${process.env.GIT_COMMIT_HASH}\"></script>`
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
      },
      {
        test: /bootstrap\/js\//,
        use: 'imports-loader?jQuery=jquery'
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new Copy([
      {
        from: `${__dirname}/../${config.paths.assets}`,
        to: `${__dirname}/../${config.paths.assets}`
      }
    ]),
    new ExtractText(config.filenames.build.styles)
  ],
  resolve: {
    extensions: ['.js', '.vue']
  },
  devtool: '#inline-source-map'
}
