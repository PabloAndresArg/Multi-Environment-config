var Config = require("config-js");

function getConfigFileForEnvironment(env) {
  switch (env) {
    case "DEV":
      return "./conf/config.dev.js";
    case "PRODUCTION":
      return "./conf/config.prod.js";
  }
}

const configFilePath = getConfigFileForEnvironment(process.env.NODE_ENV);

const config = new Config(configFilePath);

module.exports = config;
