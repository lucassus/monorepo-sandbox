const package = require("./package.json");

module.exports = {
  displayName: {
    color: "red",
    name: package.name
  },
  preset: "ts-jest"
};
