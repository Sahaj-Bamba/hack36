import React, { Component } from "react";
import "./Prizes.scss";
import p1 from "../../../files/Prizes/1st-png.png";
import p2 from "../../../files/Prizes/2nd-png.png";
import p3 from "../../../files/Prizes/3rd-png.png";
import podium from "../../../files/Prizes/podium_1.png";

class Prizes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<section id="Prize">
					<h1 style={{ "font-family": "Jura" }}>Prizes</h1>
					<br />
					<div className="prizeHolder">
						<img src={podium} className="podium" alt="" srcset="" />
						<img src={p1} className="prize1" alt="" srcset="" />
						<img src={p2} className="prize2" alt="" srcset="" />
						<img src={p3} className="prize3" alt="" srcset="" />
					</div>
				</section>
			</>
		);
	}
}

export default Prizes;
