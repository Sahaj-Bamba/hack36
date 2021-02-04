import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Content from "./Content"
import Base from "./Base";
import './Home.scss';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="home-bg">
				<Navbar></Navbar>
				<Content></Content>
				<Base></Base>
			</div>
		);
	}
}

export default Home;
