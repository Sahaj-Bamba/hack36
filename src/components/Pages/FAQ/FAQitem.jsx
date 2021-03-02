import React, { Component } from "react";
import arrow0 from "../../../blue_arrow.svg";
import arrow1 from "../../../red_arrow.svg";
import arrow2 from "../../../blue_arrow.svg";

class FAQitem extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}
	arrow = () => {
		const arr = [arrow0, arrow1, arrow2];
		return arr[Math.floor(Math.random() * 3)];
	};
	getAnswerStyle = () => {
		if (this.state.open) {
			return {
				display: "block",
			};
		} else {
			return {
				display: "none",
			};
		}
	};

	openAnswer = (e) => {
		this.setState({ open: !this.state.open });
	};

	getToggleStyle = () => {
		if (this.state.open) {
			return {
				MozTransform: "rotate(90deg)",
				WebkitTransform: "rotate(90deg)",
				OTransform: "rotate(90deg)",
				transition: "0.5s",
				WebkitTransition: "0.5s",
				MozTransition: "0.5s",
				// transitionTimingFunction: "linear",
				transform: "rotate(90deg)",
			};
		} else {
			return {
				MozTransform: "rotate(0deg)",
				WebkitTransform: "rotate(0deg)",
				OTransform: "rotate(0deg)",
				transition: "0.5s",
				WebkitTransition: "0.5s",
				MozTransition: "0.5s",
				// transitionTimingFunction: "linear",
				transform: "rotate(0deg)",
			};
		}
	};

	render() {
		return (
			<div className="content">
				<img
					className="toggle"
					src={this.arrow()}
					style={this.getToggleStyle()}
				/>
				<span className="spn">
					<div className="question" onClick={this.openAnswer}>
						<span style={{ color: "#203246" }}>
							{this.props.question}
						</span>
						{"  "}
						{/* {this.props.question} */}
					</div>
					<p className="answer" style={this.getAnswerStyle()}>
						{this.props.answer}
					</p>
				</span>
			</div>
		);
	}
}

export default FAQitem;
