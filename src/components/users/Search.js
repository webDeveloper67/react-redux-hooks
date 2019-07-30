import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import {searchUsers, clearUsers} from '../../actions/users';
import {setAlert} from '../../actions/alert';
import {connect} from 'react-redux';

const Search = ({searchUsers, setAlert, clearUsers, users}) => {
	const [text, setText] = useState('');

	const handleOnChange = e => {
		setText(e.target.value);
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		if (text === '') {
			setAlert('Please Enter SomeThing', 'danger');
		} else {
			searchUsers(text);
			setText('');
		}
	};

	return (
		<div>
			<div>
				<form className="my-5" onSubmit={handleOnSubmit}>
					<input
						type="text"
						name="text"
						value={text}
						onChange={handleOnChange}
						placeholder="Search Users..."
						className="form-control my-3"
					/>

					<input
						type="submit"
						value="Search"
						className="btn btn-dark btn-block"
					/>
				</form>
				{users.length > 0 &&
					<button
						className="btn btn-light btn-block my-3"
						onClick={() => clearUsers()}
					>
						Clear
					</button>}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {users: Object.values(state.users)};
};

export default connect(mapStateToProps, {searchUsers, setAlert, clearUsers})(
	Search
);
