import {SEARCH_USERS, CLEAR_USERS, SHOW_CLEAR} from './types';
import axios from 'axios';

export const searchUsers = text => async dispatch => {
	const response = await axios.get(
		`https://api.github.com/search/users?q=${text}&client_id=${process.env
			.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
			.REACT_APP_GITHUB_CLIENT_SECRET}`
	);
	dispatch({
		type: SEARCH_USERS,
		payload: response.data.items
	});
};

export const clearUsers = () => {
	return {
		type: CLEAR_USERS
	};
};

export const showClear = isTrue => {
	return {
		type: SHOW_CLEAR,
		payload: {
			isTrue
		}
	};
};
