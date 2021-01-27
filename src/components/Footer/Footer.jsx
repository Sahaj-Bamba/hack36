import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="FooterContainer"> 
                Copyright © Hack36 2021 	
            </div>
		);
	}
}

export default Footer;
