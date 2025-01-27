const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js", // Main entry point for your app
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", // Use [contenthash] for cache-busting in JS files
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // This matches all JavaScript and JSX files
        exclude: /node_modules/,
        use: ["babel-loader"], // Use Babel to transpile JS and JSX
      },
      {
        test: /\.css$/, // This matches all .css files
        use: [
          MiniCssExtractPlugin.loader, // Use MiniCssExtractPlugin for production
          "css-loader", // Handle CSS files
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Resolving .js and .jsx extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template for the app
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css", // Create unique file names for CSS
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
    hot: true, // Hot Module Replacement for live updates
  },
  optimization: {
    splitChunks: {
      chunks: "all", // Split all types of chunks (initial, async, etc.)
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/, // Create a separate chunk for node_modules
          name: "vendor",
          chunks: "all",
        },
      },
    },
    minimize: true, // Enable minification for production
  },
  mode: "production", // Set the mode to production for optimizations
};
