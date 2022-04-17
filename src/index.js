class CadencePlugin {
  apply(compiler) {
    compiler.options.module.rules.unshift({
      test: /\.cdc$/i,
      type: 'asset/source',
    })
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