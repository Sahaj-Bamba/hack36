import React, { Component } from "react";
import "./Back.scss";

class Back extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	render() {
		return <div className="Back"></div>;
	}
}

export default Back;
