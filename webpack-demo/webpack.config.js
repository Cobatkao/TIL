const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CopyPlugin = require('copy-webpack-plugin');

// 环境变量配置 dev/online
const WEBPACK_ENV = process.env.WEBPACK_ENV || "dev";

// 获取html-webpack-connfig参数的方法
// const getHtmlConfig = function(name, title) {
//   return {
//     template: "./src/" + name + ".html",
//     filename: name + ".html",
//     favicon: "./favicon.ico",
//     title: title,
//     inject: true,
//     hash: true,
//     chunks: [name]
//   };
// };

const config = {
  mode: 'production',
  entry: {
    index: ['./src/index.js'],
  },
  devServer: {
    contentBase: './dist',                                                                                                                                                                                                                                                                                                  
    open: 'true',
    hot: true,
    // hotOnly: true
  },
  output: {
    filename: "js/[name].[hash:8].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            outputPath: "images/",
            limit: 100,
            name: "[name].[ext]"
          }
        }
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack打包测试',
      template:'src/index.html',
      filename:'[name]_bundle.html',
      chunks: ['index']
    }),
    
  ]
};

module.exports = config;
