// from react_root.js
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import TopLevelApp from '../src/samples/TopLevelApp';
import './common.css';
import '../assets/img/favicon.ico';
import '../assets/css/sdkStyles.css';
import '../assets/css/variables.css';

const outletElement = document.getElementById('outlet');

if (outletElement) {
  render(
    <BrowserRouter>
      <TopLevelApp />
    </BrowserRouter>,
    document.getElementById('outlet')
  );
}
