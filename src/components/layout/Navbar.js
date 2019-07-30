import React from 'react';
import {Link} from 'react-router-dom';
import {FaGithubSquare} from 'react-icons/fa';

const Navbar = () => {
	return (
		<nav className="navbar bg-primary">
			<h1 className="text-white">
				<FaGithubSquare />
				Github Finder
			</h1>
			<ul className="list-unstyled list-group list-group-horizontal">
				<li className="list-group-item">
					<Link to="/">Home</Link>
				</li>
				<li className="list-group-item">
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
