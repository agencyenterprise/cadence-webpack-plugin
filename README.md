# cadence-webpack-plugin

Webpack plugin that helps importing .cdc files and polyfills fcl dependencies

This fixes the [Buffer is not defined](https://github.com/onflow/fcl-js/issues/1083) and [Module not found: Error: Can't resolve 'http'](https://github.com/onflow/fcl-js/issues/982) bugs

## Install
```sh
npm i cadence-webpack-plugin -D
```

## Usage

```js
import MINT_NFT from './flow/mint-nft.cdc'

await mutate({
  cadence: MINT_NFT,
  // ...
});
```

## Setup with Webpack

In your webpack.config.js

```js
const CadencePlugin = require('cadence-webpack-plugin')

module.exports = {
  // ...
  plugins: [
    new CadencePlugin(),
    // ...
  ]
}
```

## Shortcut setup with [Nullstack](https://nullstack.app)

In your webpack.config.js

```js
const [server, client] = require('nullstack/webpack.config');
const { applyCadencePlugin } = require('cadence-webpack-plugin')

module.exports = applyCadencePlugin([server, client])
```

## License

This project is released under the [MIT License](https://opensource.org/licenses/MIT).