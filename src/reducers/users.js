import {SEARCH_USERS, CLEAR_USERS} from '../actions/types';
import _ from 'lodash';
const initialState = {};

export default function(state = initialState, action) {
	switch (action.type) {
		case SEARCH_USERS:
			return {...state, ..._.mapKeys(action.payload, 'id')};
		case CLEAR_USERS:
			return {};
		default:
			return state;
	}
}
