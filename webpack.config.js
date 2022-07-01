const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  entry: { bundle: "./src/index.js", slider: "./src/slider/slider.js" },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    environment: {
      arrowFunction: false,
    },
    assetModuleFilename: "images/[name][ext]",
  },
  devtool:
    process.env.NODE_ENV === "development" ? "eval-source-map" : "source-map",
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "studentsList.html",
      template: "public/studentsList.html",
    }),
    new HtmlWebpackPlugin({
      filename: "feedback.html",
      template: "public/feedback.html",
    }),
    new HtmlWebpackPlugin({
      filename: "studentInfo.html",
      template: "public/studentInfo.html",
    }),
    new HtmlWebpackPlugin({
      filename: "slider.html",
      template: "public/slider.html",
    }),
    new BrowserSyncPlugin(
      {
        host: "localhost",
        port: 3000,
        proxy: "http://localhost:9000/",
      },
      {
        reload: false,
      }
    ),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
    watchFiles: ["*.html"],
  },
};
