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
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
            },
            {
                test: /\.(eot|ttf)$/,
                loader: "file-loader",
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
  resolve:{
    modules: [
        path.resolve("./src"),
        path.resolve("./node_modules"),
    ],
    extensions: [".js",".jsx"]
  }
};
