const pkg = require('./package.json')

module.exports = {
  displayName: {
    name: pkg.name,
    color: 'blue'
  },
  testEnvironment: 'node',
  preset: 'ts-jest'
}
