import React, { Component } from "react";
import "./Base.scss";
import land from '../../../files/LandingPageMobile.mp4';
import {TextScramble} from "../About/scrambler";
import logo from '../../../files/logo.png';

import vir1 from '../../../files/virus/Virus1.png'
import vir2 from '../../../files/virus/Virus2.png'
import vir3 from '../../../files/virus/Virus3.png'
import vir4 from '../../../files/virus/Virus4.png'
import vir5 from '../../../files/virus/Virus5.png'
// import {  } from "https://cdn.jsdelivr.net/npm/typed.js@2.0.11"
// ";

class Base extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text : ""
		};
	}
	makeNewPosition = () =>{
    
		// Get viewport dimensions (remove the dimension of the div)
		var vidheight = $("#myVideo").height();
		var vidwidth = $("#myVideo").width();
		var h = window.screen.height - 50;
		var w = window.screen.width - 50 ;
		console.log(w);
		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);
		
		return [nh,nw];    
		
	}
	
	animateDiv = (id,tm)=>{
		setInterval(() => {
			var newq = this.makeNewPosition();
			
			var postop = $("#myVideo").position().top;
			var posleft = $("#myVideo").position().left;
			var vidheight = $("#myVideo").height();
			var vidwidth = $("#myVideo").width();
			var w = window.screen.width - 50 ;

			if(w > 310 && (posleft<newq[1]&&newq[1]<(posleft+vidwidth))==false   ) {

				document.getElementById(id).style.left=newq[1]+'px';
				document.getElementById(id).style.top=newq[0]+'px';
				
				$("#"+id).fadeIn(500);
				$("#"+id).fadeOut(tm-500);
					
			} 
		}, tm);		
		
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
		this.animateDiv('a',3000);
		this.animateDiv('b',4000);
		this.animateDiv('c',5000);
		this.animateDiv('d',2000);
		this.animateDiv('e',2500);

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
				<div id='a' ><img src={vir1} alt="" srcset=""/> </div>
				<div id='b' ><img src={vir2} alt="" srcset=""/> </div>
				<div id='c' ><img src={vir3} alt="" srcset=""/> </div>
				<div id='d' ><img src={vir4} alt="" srcset=""/> </div>
				<div id='e' ><img src={vir5} alt="" srcset=""/> </div>
				<div id='f' ><img src={vir5} alt="" srcset=""/> </div>
		
		    </div>

		);
	}
}

export default Base;
