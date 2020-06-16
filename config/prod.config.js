const merge = require("webpack-merge");
const common = require("./common.config.js");

module.exports = (configDirs) =>
  merge(common(configDirs), {
    mode: "production",
  });
