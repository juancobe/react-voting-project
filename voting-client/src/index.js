import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import {createStore} from 'redux';
// import {AppContainer} from 'react-hot-loader';
// import App from './components/App';
import {setState} from './action_creators';
import reducer from './reducer';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

const rootEl = document.getElementById('root');


const store = createStore(reducer);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state => 
  store.dispatch(setState(state))
);

ReactDOM.render((
<Provider store={store}>  
  <HashRouter>
    <div>
        <Route exact path="/" render={(props) => (
          <VotingContainer {...props} />
        )} />
        <Route path="/results" render={(props) => (
          <ResultsContainer {...props} />
        )} />
    </div>
  </HashRouter>
</Provider>
  ), rootEl
);

// ReactDOM.render(
// 	<AppContainer>
// 	  <App />
// 	</AppContainer>,
//   rootEl
// );

// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./containers/App', () => {
//     const NextApp = require('./containers/App').default;
//     ReactDOM.render(
//       <AppContainer>
//         <NextApp/>
//       </AppContainer>,
//       document.getElementById('root')
//     );
//   });
// }