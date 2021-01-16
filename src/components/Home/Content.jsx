import React, { Component } from "react";
import Base from "../Pages/Base/Base";
import About from "../Pages/About/About";
import Timeline from "../Pages/Timeline/Timeline";
import Sponsor from "../Pages/Sponsor/Sponsor";
import FAQ from "../Pages/FAQ/FAQ";
import Theme from "../Pages/Theme/Theme";

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { activeMenu } = this.props;

		return (
			<div>
				{activeMenu==="Home" && <Base />}
				{activeMenu==="About" && <About />}
				{activeMenu==="Timeline" && <Timeline />}
				{activeMenu==="Sponsor" && <Sponsor />}
				{activeMenu==="FAQ" && <FAQ />}
				{activeMenu==="Theme" && <Theme />}
			</div>
		);
	}
}

export default Content;
