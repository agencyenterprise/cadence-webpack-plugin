import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';
import * as fcl from "@onflow/fcl"
import QUERY_EXAMPLE from './query-example.cdc'

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
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

  async query() {
    fcl.config().put("accessNode.api", "https://access-testnet.onflow.org")
    const result = await fcl.query({ cadence: QUERY_EXAMPLE });
    console.log(result);
  }

  render() {
    return (
      <main onclick={this.query}>
        <Head />
        <Home route="/" />
      </main>
    )
  }

}

export default Application;