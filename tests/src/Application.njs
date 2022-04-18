import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';
import * as fcl from "@onflow/fcl"

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
  }

  hydrate() {
    fcl.config({
      "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn", // Endpoint set to Testnet
    })
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <main onclick={fcl.authenticate}>
        <Head />
        <Home route="/" />
      </main>
    )
  }

}

export default Application;