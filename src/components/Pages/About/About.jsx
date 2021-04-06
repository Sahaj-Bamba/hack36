import React, { Component } from "react";
import "./About.scss";
import { TextScramble } from "./scrambler";
import milo from "../../../files/About/milo.svg";
import background from "../../../files/About/background.svg";
import hello from "../../../files/About/hello.svg";
import $ from "jquery";

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	updateText = (tex) => {
		this.setState({
			text: tex,
		});
	};

	componentDidMount() {
		var intersectionOptions = {
			root: null, // use the viewport
			rootMargin: "0px",
			threshold: 0.3,
		};

		function intersectionCallback(entries, observer) {
			entries.forEach((entry) => {
				if (entry.intersectionRatio >= 0.3) {
					document
						.getElementsByClassName("backg")[0]
						.classList.add("backga");
					document
						.getElementsByClassName("hello")[0]
						.classList.add("helloa");
					document
						.getElementsByClassName("milo")[0]
						.classList.add("miloa");
				} else {
					document
						.getElementsByClassName("backg")[0]
						.classList.remove("backga");
					document
						.getElementsByClassName("hello")[0]
						.classList.remove("helloa");
					document
						.getElementsByClassName("milo")[0]
						.classList.remove("miloa");
				}
			});
		}
		var observer = new IntersectionObserver(
			intersectionCallback,
			intersectionOptions
		);
		var target = document.getElementById("Aboutid");
		observer.observe(target);
	}

	render() {
		return (
			<section id="Aboutid">
				<div className="About">
					<div className="Content">
						<h1 style={{ "font-family": "Jura" }}>About Us</h1>
						<br />
						Hack36 4.0 is here, in a way that’s never been done
						before - it’s going to be completely virtual!
						<br className="mobileNoDisplay" />
						<br />
						However, this does not mean that our participants will
						miss out on the takeaways from a traditional hackathon.
						<br className="mobileNoDisplay" />
						<br />
						36-hour long geeking extravaganza. Think of an idea,
						make a team of 2-4 college students with no year,
						branch, course and college restrictions. Did we tell you
						it's free? Then what are you waiting for? Register ASAP.
						Join us for 36 hour fun filled with enriching talks,
						interactive workshops and fun mini games too.
						<br className="mobileNoDisplay" />
						<br />
						Trust us the journey will keep every hacker on the edge
						of their seats
					</div>
					<div className="Image">
						<img src={background} className="backg" />
						<img src={milo} className="milo" />
						<img src={hello} className="hello" />
					</div>
					{/* <div className="AboutButtons">
						<a
							href="https://drive.google.com/file/d/1_UcQL0piklxf3ku5ildXB73LWkXmHFWv"
							target="_blank"
						>
							<div className="AboutButton a1"> Sponsor Us </div>
						</a>
						
					</div> */}
				</div>
			</section>
		);
	}
}

export default About;
