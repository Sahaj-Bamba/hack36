import React, { Component } from "react";
import "./Theme.scss";

import p1 from "../../../files/Theme/T1.png";
import p2 from "../../../files/Theme/T2.png";
import p3 from "../../../files/Theme/T3.png";
import p4 from "../../../files/Theme/T4.png";
import p5 from "../../../files/Theme/T5.png";

class ThemeElement extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { elements, type, updateTheme, content } = this.props;
		const themeMap = {
			CyberSecurity: p1,
			Education: p2,
			"Women Safety": p3,
			"E-Administration": p4,
			"Life in Pandemic": p5,
			"": p1,
		};

		return (
			<div className="ThemeElement">
				{elements &&
					elements.map((item, index) => {
						return (
							<div
								className="ThemeSubElement"
								onMouseEnter={() => updateTheme(item)}
								onClick={() => updateTheme(item)}
								onMouseLeave={() => updateTheme("")}
							>
								{/* {item} */}
								<img
									src={themeMap[item]}
									className="ThemeSubPhoto"
									alt=""
								/>
								<div className="ImageText">{content[item]}</div>
							</div>
						);
					})}
			</div>
		);
	}
}

export default ThemeElement;
