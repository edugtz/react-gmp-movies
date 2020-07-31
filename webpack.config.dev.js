const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle-dev.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "index.html"
    })
  ]
};
