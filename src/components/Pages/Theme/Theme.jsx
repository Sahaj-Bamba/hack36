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
			"Life in Pandemic",
		];
		const content = {
			"Life in Pandemic":
				"If there wouldn't have been technology, we could never have survived the pandemic this strongly, but there is always a scope of progress.",
			Education:
				"Technology is already playing a huge role in education. Brainstorm and get a unique idea to reform the education system for the better.",
			"Women Safety":
				"Come up with an idea which increases women safety and feel proud of being a technocrat.",
			"E-Administration":
				"Nobody likes to stand in queues or visit the offices for some paper work daily, but Administrative work is something which requires both, So why not find a solution for this?",
			CyberSecurity:
				"Hackers use attacks like ransomware to threaten people with their sensitive information. Brainstorm to find a solution to move towards a safer and secure internet!!",
		};

		return (
			<>
				<h1 style={{ "font-family": "Jura" }}>Themes</h1>
				<br />

				<div className="Theme">
					{/* <ThemeMain activeTheme={this.state.activeTheme} /> */}
					<ThemeElement
						elements={elements}
						updateTheme={this.updateTheme}
						content={content}
					/>
				</div>
			</>
		);
	}
}

export default Theme;
