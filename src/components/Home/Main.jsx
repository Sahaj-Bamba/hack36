import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar1/Navbar1";
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
				<Navbar1 changeMenu={this.changeMenu} activeMenu={activeMenu} />
				<main>
					<Navbar changeMenu={this.changeMenu} activeMenu={activeMenu} />
					<Content activeMenu={activeMenu} />					
				</main>
				<Footer />
			</div>
		);
	}
}

export default Main;
