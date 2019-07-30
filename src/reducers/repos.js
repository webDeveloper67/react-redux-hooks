import {GET_REPOS} from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_REPOS:
			return {
				...state,
				repos: action.payload
			};
		default:
			return state;
	}
}
