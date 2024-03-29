const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    popup: path.resolve("src/popup"),
    options: path.resolve("src/options"),
    contextmenu: path.resolve("src/contextmenu/contextmenu.ts"),
    contentScript: path.resolve("src/contentScript/contentScript.tsx"),
  },
  module: {
    rules: [
      { use: "ts-loader", test: /\.tsx?$/, exclude: /node_modules/ },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i,
      },
      {
        type: "asset/resource",
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
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
    getHtmlPlugin("background"),
    getHtmlPlugin("contentScript"),
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
      chunks(chunk) {
        return chunk.name !== "contentScript";
      },
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
