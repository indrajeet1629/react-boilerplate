const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["babel-polyfill", path.resolve(__dirname, "./server") + "/index.js"],

  target: "node",

  externals: [nodeExternals()],

  output: {
    path: path.resolve("server-build"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /js$/,
        exclude: /node_modules/,
        use: [
          { loader: "ify-loader" },
          {
            loader: "babel-loader",
            query: { presets: ["react-app"] },
          },
        ],
      },
    ],
  },
};
