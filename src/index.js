const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

class CadencePlugin {
  apply(compiler) {
    compiler.options.module.rules.unshift({
      test: /\.cdc$/i,
      type: 'asset/source',
    })
    if (compiler.options.target !== 'node') {
      compiler.options.plugins.push(
        new NodePolyfillPlugin({
          excludeAliases: ["console"]
        })
      )
    }
  }
}

function applyCadencePlugin(environments) {
  return environments.map((environment) => (...args) => {
    const config = environment(...args);
    config.plugins.push(new CadencePlugin())
    return config;
  })
}

module.exports = CadencePlugin
module.exports.applyCadencePlugin = applyCadencePlugin