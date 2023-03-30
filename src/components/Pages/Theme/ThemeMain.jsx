import React, { Component } from "react";
import "./Theme.scss";
import p1 from "../../../files/Theme/T1.png";
import p2 from "../../../files/Theme/T2.png";
import p3 from "../../../files/Theme/T3.png";
import p4 from "../../../files/Theme/T4.png";
import p5 from "../../../files/Theme/T5.png";

class ThemeMain extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { activeTheme } = this.props;
		const themeMap = {
			CyberSecurity: p1,
			Education: p2,
			"Women Safety": p3,
			"E-Administration": p4,
			"life in Pandemic": p5,
			"": p1,
		};

		return (
			<div className="ThemeMain">
				<img
					src={themeMap[activeTheme]}
					className="themePhoto"
					alt=""
				/>
			</div>
		);
	}
}

export default ThemeMain;
