import React, { Component } from "react";
import "./Sponsor.scss";
import $ from "jquery";

class Sponsor extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		var intersectionOptions = {
			root: null, // use the viewport
			rootMargin: "0px",
			threshold: 0.2,
		};

		function intersectionCallback(entries, observer) {
			entries.forEach((entry) => {
				if (entry.intersectionRatio >= 0.2) {
					//window.location = "#Sponsors";
					var hash = "#Sponsors";
					$("html, body").animate(
						{
							scrollTop: $(hash).offset().top,
						},
						800,
						function () {
							// Add hash (#) to URL when done scrolling (default click behavior)
							window.location.hash = hash;
						}
					);
				} else {
				}
			});
		}
		var observer = new IntersectionObserver(
			intersectionCallback,
			intersectionOptions
		);
		var target = document.getElementById("Sponsors");
		observer.observe(target);
	}

	render() {
		return (
			<div id="Sponsors">
				<h1 className="Sponsor-head">Past Sponsors</h1>
				<div id="sponsors-logo">
					<div>
						<a href="https://mic.gov.in/mic/innovation-council/www.ieeeup.org/">
							<img className="sponsor-img" src="images/IIC.png" />
						</a>
					</div>
					<div>
						<a href="https://www.bankofbaroda.in/">
							<img
								className="sponsor-img"
								src="images/bank.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.ieeeup.org/">
							<img
								className="sponsor-img"
								src="images/ieee_up.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://codechef.com">
							<img
								className="sponsor-img"
								src="images/codechef_logo.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://devfolio.co/">
							<img
								className="sponsor-img"
								src="images/devfolio.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://matic.network/">
							<img
								className="sponsor-img"
								src="images/matic.svg"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.jetbrains.com">
							<img
								className="sponsor-img"
								src="images/jetbrains.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.hackerearth.com">
							<img
								className="sponsor-img"
								src="images/hackerearth.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://axure.com">
							<img
								className="sponsor-img"
								src="images/axure.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://dare2compete.com">
							<img
								className="sponsor-img"
								src="images/dare2compete.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://codingblocks.com">
							<img
								className="sponsor-img"
								src="images/codingblocks.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://hackr.io/hackr-plus">
							<img
								className="sponsor-img"
								src="images/hackr_io.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.codingninjas.com">
							<img
								className="sponsor-img"
								src="images/codingninjas.svg"
							/>
						</a>
					</div>
					<div>
						<a href="https://fold.money">
							<img
								className="sponsor-img"
								src="images/fold.svg"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.wolfram.com">
							<img
								className="sponsor-img"
								src="images/Wolfram.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.thesouledstore.com">
							<img
								className="sponsor-img"
								src="images/the_souled_store.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.bugsee.com">
							<img
								className="sponsor-img"
								src="images/bugsee.svg"
							/>
						</a>
					</div>
					<div>
						<a href="https://balsamiq.com">
							<img
								className="sponsor-img"
								src="images/balsamiq_logo.svg"
							/>
						</a>
					</div>
					<div>
						<a href="https://cloudsploit.com">
							<img
								className="sponsor-img"
								src="images/cloud.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://creative-tim.com">
							<img
								className="sponsor-img"
								src="images/CreativeTim.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://interviewcake.com">
							<img
								className="sponsor-img"
								src="images/interview_cake.png"
							/>
						</a>
					</div>
					<div>
						<a href="https://www.digitalocean.com">
							<img
								className="sponsor-img"
								src="images/DO_Logo_horizontal_blue.svg"
							/>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Sponsor;
