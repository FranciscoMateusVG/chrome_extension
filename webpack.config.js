const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("src/popup"),
    options: path.resolve("src/options"),
  },
  module: {
    rules: [{ use: "ts-loader", test: /\.tsx?$/, exclude: /node_modules/ }],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    getHtmlPlugin("popup"),
    getHtmlPlugin("options"),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve("dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};

function getHtmlPlugin(name) {
  return new HtmlPlugin({
    title: `Universal Widget Extension ${name.toUpperCase()}`,
    filename: `${name}.html`,
    chunks: [`${name}`],
  });
}
