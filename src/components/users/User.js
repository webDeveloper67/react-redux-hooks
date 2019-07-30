import React, {useEffect, Fragment} from 'react';
import {connect} from 'react-redux';
import {getUser, getUserRepos} from '../../actions/users';
import {Link} from 'react-router-dom';
import {FaCheckCircle} from 'react-icons/fa';
import {FaTimesCircle} from 'react-icons/fa';
import Repos from '../repos/Repos';

const User = props => {
	useEffect(() => {
		props.getUser(props.match.params.login);
		props.getUserRepos(props.match.params.login);
		// eslint-disable-next-line
	}, []);

	const {
		name,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		company,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	} = props.user;

	return (
		<div>
			<Link to="/" className="btn btn-light">
				Back to search
			</Link>
			Hireable: {' '}
			{hireable
				? <FaCheckCircle className="text-success" />
				: <FaTimesCircle className="text-danger" />}
			<div className="card">
				<img
					src={avatar_url}
					alt="profile"
					className="rounded"
					style={{width: '150px'}}
				/>
				<h3>
					{name}
				</h3>
				<p>
					Location: {location}
				</p>
				{bio &&
					<Fragment>
						<h3>Bio</h3>
						<p>
							{bio}
						</p>
					</Fragment>}
				<a href={html_url} className="btn btn-dark my-1">
					Visit Github Profile
				</a>
				<ul>
					<li>
						{login &&
							<Fragment>
								<strong>Username: </strong> {login}
							</Fragment>}
					</li>
					<li>
						{company &&
							<Fragment>
								<strong>Company: </strong> {company}
							</Fragment>}
					</li>
					<li>
						{blog &&
							<Fragment>
								<strong>Website: </strong> {blog}
							</Fragment>}
					</li>
				</ul>
			</div>
			<div className="card text-center">
				<div className="badge badge-primary">
					Followers: {followers}
				</div>
				<div className="badge badge-success">
					Following: {following}
				</div>
				<div className="badge badge-danger">
					Public Repos: {public_repos}
				</div>
				<div className="badge badge-dark">
					Public Gists: {public_gists}
				</div>
			</div>
			<Repos />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

export default connect(mapStateToProps, {getUser, getUserRepos})(User);
