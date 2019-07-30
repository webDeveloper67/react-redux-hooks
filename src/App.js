import React, {Fragment, Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Components
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';

// Redux
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Navbar />
						<div className="container">
							<Alert />
							<Switch>
								<Route
									path="/"
									exact
									render={props =>
										<Fragment>
											<Search />
											<Users />
										</Fragment>}
								/>
								<Route path="/user/:login" component={User} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
