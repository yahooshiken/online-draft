const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),

  output: {
    path: path.resolve(__dirname, "..", "public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.png$/, loader: "url-loader" },
    ],
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  devServer: {
    port: 1844,
    contentBase: path.resolve(__dirname, "..", "public"),
    historyApiFallback: {
      rewrites: [{ from: /^\/*/, to: "/index.html" }],
    },
  },
};
