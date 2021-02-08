import React, { Component } from "react";
import "./About.scss";
import { TextScramble } from "./scrambler";
import milo from "../../../files/About/milo.svg";
import background from "../../../files/About/background.svg";
import hello from "../../../files/About/hello.svg";

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
			threshold: 0.5,
		};

		function intersectionCallback(entries, observer) {
			entries.forEach((entry) => {
				if (entry.intersectionRatio >= 0.5) {
					document
						.getElementsByClassName("backg")[0]
						.classList.add("backga");
					document
						.getElementsByClassName("hello")[0]
						.classList.add("helloa");
					document
						.getElementsByClassName("milo")[0]
						.classList.add("miloa");
					console.log("fully visible!");
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
					console.log("Not fully visible!");
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
			<div className="About" id="Aboutid">
				<div className="Content">
					Hack36 4.0 is here, in a way that’s never been done before -
					it’s going to be completely virtual! However, this does not
					mean that our participants will miss out on the takeaways
					from a traditional hackathon. There will be no compromise on
					36 hours of engagement for the participants, making sure
					that they are continuously engaged and intrigued with the
					latest talk of the town of the tech world from the judges
					and other techgurus. The journey is bound to keep
					participants on the edge of their seats.
				</div>
				<div className="Image">
					<img src={background} className="backg" />
					<img src={milo} className="milo" />
					<img src={hello} className="hello" />
				</div>
			</div>
		);
	}
}

export default About;
