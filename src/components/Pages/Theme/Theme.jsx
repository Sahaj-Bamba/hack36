import React, { Component } from "react";
import "./Theme.scss";
import ThemeMain from "./ThemeMain"
import ThemeElement from "./ThemeElement"

class Theme extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTheme : "",
		};
	}

	updateTheme = (th) => {
		this.setState({
			activeTheme:th
		})
	}

	render() {
		
		const elements1 = ["abc","def","ghi"];
		const elements2 = ["abc","def","ghi"];
		
		return (
			<div className="Theme">
				<ThemeElement type="1" elements={elements1} updateTheme = {this.updateTheme} />
				<ThemeMain activeTheme={this.state.activeTheme} />
				<ThemeElement type="2" elements={elements2} updateTheme = {this.updateTheme} />
            </div>
		);
	}
}

export default Theme;
