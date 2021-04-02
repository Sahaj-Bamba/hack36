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
		const elements1 = ["CyberSecurity", "Education", "Women Safety"];
		const elements2 = ["E-Administration", "life in Pandemic", ""];

		return (
			<>
				<h1 style={{ "font-family": "Jura" }}>Themes</h1>
				<br />

				<div className="Theme">
					<ThemeElement
						type="1"
						elements={elements1}
						updateTheme={this.updateTheme}
					/>
					<ThemeMain activeTheme={this.state.activeTheme} />
					<ThemeElement
						type="2"
						elements={elements2}
						updateTheme={this.updateTheme}
					/>
				</div>
			</>
		);
	}
}

export default Theme;
