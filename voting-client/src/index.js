import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Route} from 'react-router-dom';
import {List, Map} from 'immutable';
// import {AppContainer} from 'react-hot-loader';
// import App from './components/App';
import Voting from './components/Voting';
import Results from './components/Results';

const rootEl = document.getElementById('root');
const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

ReactDOM.render((
  <HashRouter>
    <div>
        <Route exact path="/" render={(props) => (
          <Voting pair={pair} {...props} />
        )} />
        <Route path="/results" render={(props) => (
          <Results pair={pair} tally={tally} {...props} />
        )} />
    </div>
  </HashRouter>
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