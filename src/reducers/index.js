import {combineReducers} from 'redux';
import usersReducer from './users';
import alertReducer from './alert';
import userReducer from './user';
import reposReducer from './repos';

export default combineReducers({
	users: usersReducer,
	alert: alertReducer,
	user: userReducer,
	repos: reposReducer
});
