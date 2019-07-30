import {combineReducers} from 'redux';
import usersReducer from './users';
import alertReducer from './alert';

export default combineReducers({
	users: usersReducer,
	alert: alertReducer
});
