import React, { Component } from "react";
import "./Timeline.scss";
import p1 from "../../../files/Time/D1.png";
import p2 from "../../../files/Time/D2.png";
import p3 from "../../../files/Time/D3.png";

class Timeline extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div id="timeline">
				<h1 style={{ "font-family": "Jura" }}>Timeline</h1>
				<div className="TimelineContent">
					<div className="TimelineElement">
						<img src={p1} className="TimelinePhoto" alt="" />
					</div>
					<div className="TimelineElement">
						<img src={p2} className="TimelinePhoto" alt="" />
					</div>
					<div className="TimelineElement">
						<img src={p3} className="TimelinePhoto" alt="" />
					</div>
				</div>
			</div>
		);
	}
}

export default Timeline;
