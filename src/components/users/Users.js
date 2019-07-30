import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Users = props => {
	const renderUsers = () => {
		return props.users.map(user => {
			return (
				<div className="row">
					<div className="col-md-4 col-lg-6">
						<div className="card text-center" key={user.id}>
							<img
								src={user.avatar_url}
								alt="bio"
								className="rounded"
								style={{width: '60px'}}
							/>
							<h3>
								{user.login}
							</h3>
							<div>
								<Link
									to={`/user/${user.login}`}
									className="btn btn-dark btn-sm my-1"
								>
									More
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			{renderUsers()}
		</div>
	);
};

const mapStateToProps = state => ({
	users: Object.values(state.users)
});
export default connect(mapStateToProps)(Users);
