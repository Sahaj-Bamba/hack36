import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="FooterContainer" style={{textAlign:"center"}}> 
                2021 All Rights Reserved © Hack36 MNNIT	
            </div>
		);
	}
}

export default Footer;
