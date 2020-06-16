const merge = require("webpack-merge");
const common = require("./common.config.js");
module.exports = (configDirs) =>
  merge(common(configDirs), {
    mode: "development",
    devServer: {
      // Hot Reload Enabled
      hot: true,
      // Auto open the Running Application in the Browser.
      open: true,
      // Display Errors on the screen
      overlay: true,

      contentBase: "/src",

      historyApiFallback: true,
    },
  });
