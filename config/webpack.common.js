var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/startup.ts',
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'string-replace-loader',
        query: {
            search: 'moduleId: module.id,',
            replace: ''
        }
      },
      {
        test: /\.ts$/,
        loader: [
          'babel-loader',
          {
              loader: 'awesome-typescript-loader',
              options: {
                  configFileName: helpers.root('src', 'tsconfig.json')
              }
          }, 
         'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
    //   {
    //     test: /\.scss$/,
    //     exclude: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "/client/*/pages")], 
    //     use: ExtractTextPlugin.extract({
    //       fallback: 'style-loader',
    //       use: ['css-loader','postcss-loader','sass-loader']
    //     })
    //   },
      {
        test: /\.(css)$/,
        use: [
          "to-string-loader",
          "css-loader",
          // "raw-loader"
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          "style-loader", 
          "css-loader",
          {
            loader: '"sass-loader"'
          }
          
        ]
      },


    //   {
    //     test: /\.css$/,
    //     exclude: helpers.root('src', 'app'),
    //     loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
    //   },
    //   {
    //     test: /\.css$/,
    //     include: helpers.root('src', 'app'),
    //     loader: 'raw-loader'
    //   }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['app', 'vendor', 'polyfills']
    // }),

    // new config.optimization.splitChunks({
    //   name: ['app', 'vendor', 'polyfills']
    // }),
    new CleanWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: './index.html'
    // })
  ],
  optimization: {
    runtimeChunk: "single", // enable "runtime" chunk
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  }
};