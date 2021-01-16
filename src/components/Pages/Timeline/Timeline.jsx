import React, { Component } from "react";
import "./Timeline.scss";

class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {

		return (
			<div className="timeline">
				<ul>
					<li>
						<div className="content">
							<h3>What is Lorem Ipsum?</h3>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
						</div>
						<div className="time">
							<h4>January 2018</h4>
						</div>
					</li>
		
					<li>
						<div className="content">
						<h3>What is Lorem Ipsum?</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
						</div>
						<div className="time">
						<h4>February 2018</h4>
						</div>
					</li>
		
					<li>
						<div className="content">
						<h3>What is Lorem Ipsum?</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
						</div>
						<div className="time">
						<h4>March 2018</h4>
						</div>
					</li>
		
				</ul>
			</div>
		);
	}
}

export default Timeline;
