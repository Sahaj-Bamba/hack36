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
		var miloWidth = $(".content-milo").width();
		var miloHeight = $(".content-milo").height();
		var h = window.screen.height - 50;
		var w = window.screen.width - 50;
		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);
		var miloTop = $(".content-milo").position()
			? $(".content-milo").position().top
			: Math.floor(Math.random() * h);
		var miloLeft = $(".content-milo").position()
			? $(".content-milo").position().left
			: Math.floor(Math.random() * w);
		if (window.screen.width < 500) {
			if (nh % 2 === 0) {
				nh = Math.floor(Math.random() * miloTop);
			} else {
				nh =
					Math.floor(Math.random() * (h - miloHeight - miloTop)) +
					miloHeight +
					miloTop;
			}
		} else {
			nw = Math.floor(Math.random() * w) + miloLeft + miloWidth;
			if (nw % 2 === 0) {
				nw = Math.floor(Math.random() * miloLeft);
			}
		}
		// // 		var rect = document.getElementById('myvideo').getBoundingClientRect();
		// // console.log(rect.top, rect.right, rect.bottom, rect.left)
		// 		var vidTop = $('#myvideo').position().top;
		//console.log(miloWidth);
		return [nh, nw];
	};

	animateDiv = (id, tm) => {
		setInterval(() => {
			var newq = this.makeNewPosition();

			if (true) {
				document.getElementById(id).style.left = newq[1] + "px";
				document.getElementById(id).style.top = newq[0] + "px";

				$("#" + id).fadeIn(500);
				$("#" + id).fadeOut(tm - 500);
			}
		}, tm);
	};
	MountVirus(id) {
		var newq = this.makeNewPosition();

		if (true) {
			document.getElementById(id).style.left = newq[1] + "px";
			document.getElementById(id).style.top = newq[0] + "px";

			$("#" + id).fadeIn(500);
			// $("#"+id).fadeOut(500);
		}
	}
	componentDidMount() {
		this.MountVirus("a", 5000);
		this.MountVirus("b", 4000);
		this.MountVirus("c", 7000);
		this.MountVirus("d", 2000);
		this.MountVirus("e", 2500);

		this.animateDiv("a", 5000);
		this.animateDiv("b", 4000);
		this.animateDiv("c", 7000);
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
