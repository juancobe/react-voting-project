import React from 'react';
import {connect} from 'react-redux';
import Vote from './Vote';
import Winner from './Winner';
import * as actionCreators from '../action_creators';


class Voting extends React.PureComponent {
	render() {
		// console.log(this.props);
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

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner'),
		hasVoted: state.get('hasVoted')
	};
}

//I'm passing the actionCreators (setState and vote), which are functions that generate an action.
//They will be passed to Vote as props (along with the return of mapStatetoProps), which will use the vote prop and run it
//onClick. 
export const VotingContainer = connect(
	mapStateToProps,
	actionCreators
)(Voting);


export {Voting};
