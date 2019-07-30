import React from 'react';
import UserItem from './UserItem';
import {connect} from 'react-redux';

class Users extends React.Component {
	render() {
		return (
			<div>
				<div>
					{this.props.users.map(user => <UserItem key={user.id} user={user} />)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {users: Object.values(state.users)};
};

export default connect(mapStateToProps)(Users);
