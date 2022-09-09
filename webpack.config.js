const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// Main const
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
}

// Pages const for HtmlWebpackPlugin

const PAGES_DIR = PATHS.src
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.html'))

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].[contenthash].js`,
    path: PATHS.dist,
    /*
      publicPath: '/' - relative path for dist folder (js,css etc)
      publicPath: './' (dot before /) - absolute path for dist folder (js,css etc)
    */
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        // JavaScript
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        // Fonts
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        // images / icons
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(mp4)$/,
        loader: 'file-loader',
        // use: 'file-loader?name=videos/[name].[ext]',
        // loader: 'url-loader'
        loader: 'url-loader?limit=100000'
        // loader: 'file-loader'
        // loader: 'file-loader?name=videos/[name].[ext]'
      },
      // {
      //   test: /\.mp4$/,
      //   use: 'file-loader?name=videos/[name].[ext]',
      // },
      {
        // scss
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        // css
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '~': PATHS.src, // Example: import Dog from "~/assets/img/dog.jpg"
      '@': `${PATHS.src}/js`, // Example: import Sort from "@/utils/sort.js"
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[contenthash].css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        // Images:
        {
          from: `${PATHS.src}/${PATHS.assets}img`,
          to: `${PATHS.assets}img`,
        },
        // Fonts:
        {
          from: `${PATHS.src}/${PATHS.assets}fonts`,
          to: `${PATHS.assets}fonts`,
        },
      ],
    }),


  ],
}