import React from 'react';
import RepoItem from './RepoItem';
import {connect} from 'react-redux';

const Repos = ({repos}) => {
	return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
};

const mapStateToProps = state => {
	return {repos: Object.values(state.repos)};
};

export default connect(mapStateToProps)(Repos);
