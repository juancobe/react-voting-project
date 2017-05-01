import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {AppContainer} from 'react-hot-loader';

const rootEl = document.getElementById('root');

ReactDOM.render(
	<AppContainer>
	  <App />
	</AppContainer>,
  rootEl
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}