import Nullstack from 'nullstack';
import './Application.css';
import Cadence from './Cadence';
import Polyfill from './Polyfill';

class Application extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Welcome to Nullstack!`;
  }

  render() {
    return (
      <main>
        <Cadence route="/" />
        <Polyfill route="/polyfill" />
      </main>
    )
  }

}

export default Application;