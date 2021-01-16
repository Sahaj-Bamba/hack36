import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Home/Main";
class Routes extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Router>
				<Route
					path="/"
					exact
					render={(props) => (
						<React.Fragment>
							<Main />
						</React.Fragment>
					)}
				/>
			</Router>
		);
	}
}

export default Routes;
