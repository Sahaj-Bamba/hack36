import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Content from "./Content";
import "./Main.scss";

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
		const { activeMenu} = this.state;

		return (
			<div className="MainContainer">
				<Navbar changeMenu={this.changeMenu} activeMenu={activeMenu} />
				<Content activeMenu={activeMenu} />
				<Footer />
			</div>
		);
	}
}

export default Main;
