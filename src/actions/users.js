import {SEARCH_USERS, CLEAR_USERS, GET_USER, GET_REPOS} from './types';
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

// Get single Github user
export const getUser = login => async dispatch => {
	const response = await axios.get(
		`https://api.github.com/users/${login}?client_id=${process.env
			.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
			.REACT_APP_GITHUB_CLIENT_SECRET}`
	);

	dispatch({
		type: GET_USER,
		payload: response.data
	});
};

// Get Repos
export const getUserRepos = login => async dispatch => {
	const response = await axios.get(
		`https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process
			.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env
			.REACT_APP_GITHUB_CLIENT_SECRET}`
	);

	dispatch({
		type: GET_REPOS,
		payload: response.data
	});
};

export const clearUsers = () => {
	return {
		type: CLEAR_USERS
	};
};
