import React, { Component } from "react";
import "./Base.scss";

import vir1 from "../../files/virus/Virus1.png";
import vir2 from "../../files/virus/Virus2.png";
import vir3 from "../../files/virus/Virus3.png";
import vir4 from "../../files/virus/Virus4.png";
import vir5 from "../../files/virus/Virus5.png";

import $ from "jquery";

class Base extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	restart() {
		var vid = document.getElementById("myVideo");
		vid.currentTime = 5;
	}

	updateText = (tex) => {
		this.setState({
			text: tex,
		});
	};

	makeNewPosition = () => {
		var h = window.screen.height - 50;
		var w = window.screen.width - 50;
		//	console.log(w);
		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);

		return [nh, nw];
	};

	animateDiv = (id, tm) => {
		setInterval(() => {
			var newq = this.makeNewPosition();

			if (true) {
				document.getElementById(id) && (document.getElementById(id).style.left = newq[1] + "px");
				document.getElementById(id) && (document.getElementById(id).style.top = newq[0] + "px");

				$("#" + id).fadeIn(500);
				$("#" + id).fadeOut(tm - 500);
			}
		}, tm);
	};
	componentDidMount() {
		this.animateDiv("a", 3000);
		this.animateDiv("b", 4000);
		this.animateDiv("c", 5000);
		this.animateDiv("d", 2000);
		this.animateDiv("e", 2500);
	}

	render() {
		return (
			<div className="Base" id="Home">
				<div id="a">
					<img src={vir1} alt="" srcSet="" />{" "}
				</div>
				<div id="b">
					<img src={vir2} alt="" srcSet="" />{" "}
				</div>
				<div id="c">
					<img src={vir3} alt="" srcSet="" />{" "}
				</div>
				<div id="d">
					<img src={vir4} alt="" srcSet="" />{" "}
				</div>
				<div id="e">
					<img src={vir5} alt="" srcSet="" />{" "}
				</div>
			</div>
		);
	}
}

export default Base;
