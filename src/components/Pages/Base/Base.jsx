import React, { Component } from "react";
import "./Base.scss";
import land from '../../../files/LandingPageMobile.mp4';
import {TextScramble} from "../About/scrambler";
// import {  } from "https://cdn.jsdelivr.net/npm/typed.js@2.0.11"
// ";
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
		
		setTimeout(() => {
            var element = document.getElementById("loader");
            element && element. parentNode && element. parentNode .removeChild(element);
        }, 500);

		var video = document.getElementById("myVideo");
		video && video.play();
		this.interval = setInterval(() => {
			var vid = document.getElementById("myVideo");
			vid.currentTime = 0;
        }, 4100);

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

		return (
			
			
			<div className="Base" id="Home" >
				<div className="vid">
					<video autoplay muted loop id="myVideo">
						<source src={ land } type="video/mp4" />
					</video>
				</div>
				<div className="cnt">
					<div className="cntcnt">
						<h1 class="h">Hack36</h1>
						<br />
						{/* <div id="typo">36 hours of <span class="primary" id="type"></span> </div> */}
						<div className="ScrambledTextBase" id="typo">
							{this.state.text}
						</div>	
					</div>			
				</div>	
            </div>

		);
	}
}

export default Base;
