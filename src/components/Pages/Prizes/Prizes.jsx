import React, { Component } from "react";
import "./Prizes.scss";

import p1 from "../../../files/Prizes/1st.png";
import p2 from "../../../files/Prizes/2nd.png";
import p3 from "../../../files/Prizes/3rd.png";
import pg from "../../../files/Prizes/BestGirls.png";

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
					<div className="Prizes">
						<div className="PrizesCell prize1">
							<center>
								<img className="Prizeimg" src={p1} alt="" />
							</center>
						</div>
						<div className="PrizesCell prize2">
							<center>
								<img className="Prizeimg" src={p2} alt="" />
							</center>
						</div>
						<div className="PrizesCell prize3">
							<center>
								<img className="Prizeimg" src={p3} alt="" />
							</center>
						</div>
						<div className="PrizesCell prizeg">
							<center>
								<img className="Prizeimg" src={pg} alt="" />
							</center>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Prizes;
