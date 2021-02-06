// import React, { Component } from "react";
// import "./About.scss";
// import {TextScramble} from "./scrambler";

// class About extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			text : ""
// 		};
// 	}

// 	updateText = (tex) => {
// 		this.setState({
// 			text : tex
// 		})
// 	}

// 	componentDidMount(){
		
// 		const phrases = [
// 		'36 hours of excitement',
// 		'36 hours of fun',
// 		'36 hours of coding',
// 		'36 hours of hacking',
// 		'36 hours of wired in',
// 		]

// 		const fx = new TextScramble(this,this.updateText);
// 		let counter = 0
// 		const begin = () => {
// 				fx.setText(phrases[counter]).then(() => {
// 				setTimeout(begin, 800)
// 			})
// 			counter = (counter + 1) % phrases.length
// 		}
// 		begin();
// 	}

// 	render() {

// 		return (
// 			<div>
// 				{/* <div className="ScrambledText">
// 					{this.state.text}
					
// 				</div> */}
// 				<h1>hello</h1>
// 			</div>
// 		);
// 	}
// }

// export default About;
