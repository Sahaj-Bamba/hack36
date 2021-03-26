import React, { Component } from "react";
import "./Panel.scss";
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
					<h1 style={{ "font-family": "Jura" }}>Panel</h1>
					<br />
					<div className="panel_container">
						<div className="panel_card">
							<div className="panel_content">
								<h2>Nathan Drake</h2>
								<p>Lorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem Ipsun
								</p>
								<a href="http://">Read More</a>
							</div>
							<img src={p1} alt="" srcset=""/>
						</div>
					<div className="panel_card">
						<div className="panel_content">
							<h2>Sam </h2>
							<p>Lorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem IpsunLorem Ipsun
							</p>
							<a href="http://">Read More</a>
						</div>
						<img src={p2} alt="" srcset=""/>
					</div>
				</div>
				</section>
			</>
		);
	}
}

export default Prizes;
