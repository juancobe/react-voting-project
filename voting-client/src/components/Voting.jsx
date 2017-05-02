import React from 'react';
import Vote from './Vote';
import Winner from './Winner';

class Voting extends React.PureComponent {
	render() {
		return (
			<div>
				{this.props.winner ? 
					<Winner ref="winner" winner={this.props.winner} /> : 
					<Vote {...this.props} />
				}
			</div>
		);
	}
}

export default Voting;
