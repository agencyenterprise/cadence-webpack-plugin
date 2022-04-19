import Nullstack from 'nullstack';
import { config, query } from '@onflow/fcl';
import QUERY_EXAMPLE from './query-example.cdc';

class Home extends Nullstack {

  async query() {
    config().put("accessNode.api", "https://access-testnet.onflow.org")
    this.acknowledged = await query({ cadence: QUERY_EXAMPLE });
  }

  render() {
    return (
      <button onclick={this.query} data-acknowledged={this.acknowledged}>
        Test FCL
      </button>
    )
  }

}

export default Home;