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
		const phrases = [
			"36 hours of excitement",
			"36 hours of fun",
			"36 hours of coding",
			"36 hours of hacking",
			"36 hours of wired in",
		];

		const fx = new TextScramble(this, this.updateText);
		let counter = 0;
		const begin = () => {
			fx.setText(phrases[counter]).then(() => {
				setTimeout(begin, 800);
			});
			counter = (counter + 1) % phrases.length;
		};
		begin();
	}

	render() {
		return (
			<div className="About">
				<div className="Image">
					<img src={background} className="backg" />
					<img src={milo} className="milo" />
					<img src={hello} className="hello" />
				</div>
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
			</div>
		);
	}
}

export default About;
