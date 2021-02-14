import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Home/Main";
// import About from "./components/Pages/About/About";
import FAQ from "./components/Pages/FAQ/FAQ";
import About from "./components/Pages/About/About";
import Back from "./components/Pages/Back/Back";

import Contact from "./components/Pages/Contact/Contact";
import Team from "./components/Pages/Team/Team";
import Sponsor from "./components/Pages/Sponsor/Sponsor";

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
							<Back />
							<Main />
							{/* <About /> */}
							<About />
							<FAQ />
							<Contact />
							<Sponsor />
						</React.Fragment>
					)}
				/>
				<Route
					path="/about"
					exact
					render={(props) => (
						<React.Fragment>{/* <About /> */}</React.Fragment>
					)}
				/>
				<Route
					path="/contact"
					exact
					render={(props) => (
						<React.Fragment>
							<Contact />
						</React.Fragment>
					)}
				/>
				<Route
					path="/teams"
					exact
					render={(props) => (
						<React.Fragment>
							<Team />
						</React.Fragment>
					)}
				/>
			</Router>
		);
	}
}

export default Routes;
