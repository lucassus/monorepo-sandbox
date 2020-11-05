const package = require("./package.json");

module.exports = {
  displayName: {
    name: package.name,
    color: "blue"
  },
  testEnvironment: "node",
  preset: "ts-jest"
};
