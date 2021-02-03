import React, { Component } from "react";
import "./Sponsor.scss";

class Sponsor extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<div>	
	            <h5 style={{marginTop:"3rem"}}>If you are interested in sponsoring Hack36 2021, <a href={"mailto:hackathon@mnnit.ac.in"}>email us</a> for more details!</h5>
				<h2>Past Sponsors</h2>
			</div>
		);
	}
}

export default Sponsor;
