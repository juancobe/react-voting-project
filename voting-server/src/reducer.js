import {setEntries, next, vote, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
	switch(action.type) {
		case 'SET_ENTRIES':
			return setEntries(state, action.entries);
		case 'NEXT':
			return next(state);
		case 'VOTE': 
		//I'm only modifying the subMap vote, and assigning it the value that the vote function returns.
			return state.update('vote',
				voteState => vote(voteState, action.entry));
	}
	return state;
}