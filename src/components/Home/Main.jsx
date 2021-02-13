import React, { Component } from "react";
// import Navbar from "../Navbar/Navbar";
import "./Main.scss";
import Home from "./Home";
import Back from "../Pages/Back/Back";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = { activeMenu: "Home" };
	}

	changeMenu = (event, item) => {
		this.setState({
			activeMenu: item,
		});
		event.stopPropagation();
	};

	render() {
		return (
			<div>
				<Home></Home>
			</div>
		);
	}
}

export default Main;
