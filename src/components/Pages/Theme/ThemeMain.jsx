import React, { Component } from "react";
import "./Theme.scss";

class ThemeMain extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

        const {activeTheme} = this.props;

		return (
			<div className="ThemeMain">
                I am Theme {activeTheme}.
            </div>
		);
	}
}

export default ThemeMain;
