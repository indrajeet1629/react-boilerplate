const path = require("path");

var APP_DIR = path.resolve(__dirname, "./src");
var BUILD_DIR = path.resolve(__dirname, "./dist");

const configDirs = {
  APP_DIR,
  BUILD_DIR,
};
module.exports = (env) => {
  if (env === "dev" || env === "prod") {
    return require("./config/" + env + ".config.js")(configDirs);
  } else {
    console.log(
      "Wrong webpack build parameter. Possible choices: 'dev' or 'prod'."
    );
  }
};
