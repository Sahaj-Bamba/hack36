import React, { useState, useEffect } from 'react'
import background_aboutus from "../../../files/AboutUs/background_aboutus.svg"
import hello_aboutus from "../../../files/AboutUs/hello_aboutus.svg"
import milo_aboutus from "../../../files/AboutUs/milo_aboutus.svg"
import { Component } from 'react'
import $ from "jquery";
class About extends Component {
	componentDidMount() {
		$('#background_aboutus').fadeOut(0);
		$('#milo_about').fadeOut(0);
		$('#hello_aboutus').fadeOut(0);
		$('#background_aboutus').fadeIn(500,function (){
			$('#milo_about').fadeIn(1000,function () {
				$('#hello_aboutus').fadeIn(1000);
	
			});
		});
	}
	render() {
		return (
			<div style={{ position: 'relative', height: '50em', width: '50em' }}>
				<img
					id="background_aboutus"
					src={background_aboutus}
					alt="background"
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: 'auto',
						height: '100%',
					}}
				/>
				<img
					id="hello_aboutus"
					src={hello_aboutus}
					alt="hello about us"
					style={{
						position: 'absolute',
						left: '8em',
						top: '0.5em',
						width: 'auto',
						height: '40em',
					}}
				/>
				<img
					id="milo_about"
					className="milo_aboutus"
					src={milo_aboutus}
					alt="milo about us"
					style={{
						position: 'absolute',
						left: '3em',
						top: '6em',
						width: 'auto',
						height: '30em',
					}}
				/>
			</div>
	);

	}
}

export default About;

