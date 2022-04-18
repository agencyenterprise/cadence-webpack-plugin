const [server, client] = require('nullstack/webpack.config');
const { applyCadencePlugin } = require('cadence-webpack-plugin')

module.exports = applyCadencePlugin([server, client])