import React, { Component } from "react";
import "./Theme.scss";
import ThemeMain from "./ThemeMain";
import ThemeElement from "./ThemeElement";

class Theme extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTheme: "",
		};
	}

	updateTheme = (th) => {
		this.setState({
			activeTheme: th,
		});
	};

	render() {
		const elements = [
			"CyberSecurity",
			"Education",
			"Women Safety",
			"E-Administration",
			"life in Pandemic",
		];

		return (
			<>
				<h1 style={{ "font-family": "Jura" }}>Themes</h1>
				<br />

				<div className="Theme">
					<ThemeMain activeTheme={this.state.activeTheme} />
					<ThemeElement
						elements={elements}
						updateTheme={this.updateTheme}
					/>
				</div>
			</>
		);
	}
}

export default Theme;
