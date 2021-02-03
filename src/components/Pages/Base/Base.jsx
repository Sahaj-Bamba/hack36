import React, { Component } from "react";
import "./Base.scss";
import land from '../../../files/LandingPageMobile.mp4';
import {TextScramble} from "../About/scrambler";
import logo from '../../../files/logo.png';
import $ from "jquery";
// import {  } from "https://cdn.jsdelivr.net/npm/typed.js@2.0.11"
// ";

class Base extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text : ""
		};
	}
	makeNewPosition= () =>{
    
		// Get viewport dimensions (remove the dimension of the div)
		var h = window.screen.height - 50;
		var w = window.screen.width - 50;
		
		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);
		
		return [nh,nw];    
		
	}
	 myMove = (el) => {
		var elem = document.getElementsByClassName(el);
		var pos = 0;
		var id = setInterval(frame, 5);
		function frame() {
		  if (pos == 350) {
			clearInterval(id);
		  } else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		  }
		}
	  }
	animateDiv = (myclass)=>{
		var newq = this.makeNewPosition();
		console.log(document.getElementsByClassName(myclass)[0]);
		
		document.getElementsByClassName(myclass)[0].animate({ top: newq[0], left: newq[1] }, 5000,   function(){
			
			// console.log('dkjdsjgiuds');
			this.animateDiv(myclass);

		  });
	};
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
		
		if(window.innerWidth < 700){
			var d = document.getElementById('typo');
			var e = d.parentNode;
			d.style.top = (((e.offsetWidth*450)/320)-60) +'px';
		}

		var x = document.getElementById('root');
		x.style.display = "none";

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
		this.animateDiv('a');
		this.animateDiv('b');
		this.animateDiv('c');
		this.animateDiv('d');

		begin();
	}

	render() {

		return (
			
			
			<div className="Base" id="Home" >
				<div className="vid">
					<div className="back1"></div>
					<video autoplay muted loop id="myVideo">
						<source src={ land } type="video/mp4" />
					</video>
					<div className="back2"></div>
				</div>
				<div className="cnt">
					<div className="cntcnt">
						{/* <h1 class="h">Hack36</h1> */}
						<div id="Hacklogo">
							<img src={logo} className="hackl"/>
						</div>
						<br className="noMob"/>
						{/* <div id="typo">36 hours of <span class="primary" id="type"></span> </div> */}
						<div className="ScrambledTextBase" id="typo">
							{this.state.text}
						</div>	
					</div>			
				</div>	
				<div class='a'></div>
				<div class='b'></div>
				<div class='c'></div>
				<div class='d'></div>
			</div>

		);
	}
}

export default Base;
