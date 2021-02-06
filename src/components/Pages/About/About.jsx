import React, { useState, useEffect } from 'react'
import background_aboutus from "../../../files/AboutUs/background_aboutus.svg"
import hello_aboutus from "../../../files/AboutUs/hello_aboutus.svg"
import milo_aboutus from "../../../files/AboutUs/milo_aboutus.svg"

export default function About() {

	const [showMilo, setShowMilo] = useState(false);

	return (
			<div style={{ position: 'relative', height: '50em', width: '50em' }}>
				<img
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