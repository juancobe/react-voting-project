import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

class App extends React.PureComponent {
	render () {
		return (
			React.cloneElement(this.props.children, {pair: pair})
		);
	}
}

export default App;