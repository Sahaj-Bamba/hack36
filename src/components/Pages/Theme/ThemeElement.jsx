import React, { Component } from "react";
import "./Theme.scss";

class ThemeElement extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { elements, type, updateTheme } = this.props;

		return (
			<div className="ThemeElement">
				{elements &&
					elements.map((item, index) => {
						return (
							<div
								className={
									(type === "1" && index % 2 === 1) ||
									(type === "2" && index % 2 === 0)
										? "ThemeSubElement SpecialThemeSubElement" +
										  type
										: "ThemeSubElement"
								}
								onMouseEnter={() => updateTheme(item)}
								onClick={() => updateTheme(item)}
								onMouseLeave={() => updateTheme("")}
							>
								{item}
							</div>
						);
					})}
			</div>
		);
	}
}

export default ThemeElement;
