const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (configDirs) => {
  return {
    // Entry file
    entry: configDirs.APP_DIR + "/index.js",
    // [name] takes Current name of entry file name.
    // name is to specify the name of Build.
    output: {
      path: configDirs.BUILD_DIR,
      filename: "[name]-bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"],
      alias: {
        "react-native": "react-native-web",
      },
    },
    module: {
      rules: [
        //  Look for .js or .jsx  files.
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        //  All Type os CSS loaders.

        {
          test: /\.s[ac]ss$/i,
          use: [
            { loader: "style-loader" },
            // Only In Prod
            // MiniCssExtractPlugin.loader,
            // css-loader
            {
              loader: "css-loader",
              options: {
                modules: {
                  localIdentName: "[local]",
                },
                sourceMap: true,
                // onlyLocals: true,
              },
            },
            // sass-loader
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],
        },
        // Image Loaders.
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[name].[ext]",
              },
            },
          ],
        },
        // Fonts Loaders.
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
        },
        {
          test: /\.svg$/,
          loader: "svg-inline-loader",
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      // Only in Prod
      // new MiniCssExtractPlugin({
      //   filename: "styles.css",
      // }),
      new HtmlWebpackPlugin({
        template: configDirs.APP_DIR + "/index.html",
      }),
    ],
  };
};
