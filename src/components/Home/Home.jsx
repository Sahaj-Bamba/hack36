import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Content from "./Content";
import Base from "./Base";
import "./Home.scss";
import $ from "jquery";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		var intersectionOptions = {
			root: null, // use the viewport
			rootMargin: "0px",
			threshold: 0.3,
		};

		function intersectionCallback(entries, observer) {
			entries.forEach((entry) => {
				if (entry.intersectionRatio >= 0.3) {
					setTimeout(() => {
						var hash = "#Home";
						$("html, body").animate(
							{
								scrollTop: $(hash).offset().top,
							},
							800,
							function () {
								// Add hash (#) to URL when done scrolling (default click behavior)
								window.location.hash = hash;
							}
						);
					}, 1);
				} else {
				}
			});
		}
		var observer = new IntersectionObserver(
			intersectionCallback,
			intersectionOptions
		);
		var target = document.getElementById("Home");
		observer.observe(target);
	}

	render() {
		return (
			<div className="home-bg" id="Home">
				<Navbar></Navbar>
				<Content></Content>
				<Base></Base>
			</div>
		);
	}
}

export default Home;
