import React from 'react';

class Results extends React.PureComponent {
	render() {
		return (
			<div>
				<div>Hello from Results!</div>
				<h1>{this.props.match.url}</h1>
			</div>
		);
	}
}

export default Results;