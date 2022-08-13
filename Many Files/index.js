process.env.NODE_ENV = "DEV";
const config = require("./conf/index");
console.log(config.get("en"));
