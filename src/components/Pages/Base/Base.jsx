import React, { Component } from "react";
import "./Base.scss";
import land from '../../../files/Landing/Land.mp4';
import {TextScramble} from "../About/scrambler";

class Base extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text : ""
		};
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	restart (){
		var vid = document.getElementById("myVideo");
		vid.currentTime = 5;
	}

	updateText = (tex) => {
		this.setState({
			text : tex
		})
	}

	componentDidMount(){
		
		var video = document.getElementById("myVideo");
		video.play();
		this.interval = setInterval(() => {
			var vid = document.getElementById("myVideo");
			vid.currentTime = 0;
        }, 7500);

		const phrases = [
		'36 hours of excitement',
		'36 hours of fun',
		'36 hours of coding',
		'36 hours of hacking',
		'36 hours of wired in',
		]

		const fx = new TextScramble(this,this.updateText);
		let counter = 0
		const begin = () => {
				fx.setText(phrases[counter]).then(() => {
				setTimeout(begin, 800)
			})
			counter = (counter + 1) % phrases.length
		}
		begin();
	}

	render() {

		const { Background } = this.state;

		// var sectionStyle = {
		// 	backgroundImage: "url(" + { Background } + ")",
		// 	height: 500
		// };

		return (
			<div className="Base" id="Home" >
                <video autoplay muted loop id="myVideo">
					<source src={ land } type="video/mp4" />
				</video>
				<div className="ScrambledTextBase">
					{this.state.text}
				</div>
            </div>
		);
	}
}

export default Base;
