import React from 'react';
import {connect} from 'react-redux';
import Winner from './Winner';
import Tally from './Tally';

class Results extends React.PureComponent {
	render() {
		return (
			this.props.winner ?
			<Winner ref="winner" winner={this.props.winner} /> :
			<div className="results">
				<Tally {...this.props}/>
				<div className="management">
					<button ref="next"
									className="next"
									onClick={this.props.next}>
						Next
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote','pair']),
		winner: state.get('winner'),
		tally: state.getIn(['vote', 'tally'])
	};
}



export {Results};

export const ResultsContainer = connect(mapStateToProps)(Results);
