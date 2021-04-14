import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Grid } from "@material-ui/core";
import fbimg from "../../../files/ContactUs/fb.jpg";
import instaimg from "../../../files/ContactUs/insta.jpg";
import twitimg from "../../../files/ContactUs/twitimg.jpg";
import mailimg from "../../../files/ContactUs/mailimg.jpg";
import linkedInimg from "../../../files/ContactUs/linkedInimg.jpg";
import wwwimg from "../../../files/ContactUs/wwwimg.jpg";
class Contact extends Component {
	componentDidMount() {
		var endTime = new Date("9 April 2021 18:00:00 GMT+05:30");
		endTime = Date.parse(endTime) / 1000;

		var now = new Date();
		now = Date.parse(now) / 1000;

		var timeLeft = endTime - now;

		var days = Math.floor(timeLeft / 86400);
		var hours = Math.floor((timeLeft - days * 86400) / 3600);
		var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
		var seconds = Math.floor(
			timeLeft - days * 86400 - hours * 3600 - minutes * 60
		);

		if (hours < "10") {
			hours = "0" + hours;
		}
		if (minutes < "10") {
			minutes = "0" + minutes;
		}
		if (seconds < "10") {
			seconds = "0" + seconds;
		}

		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");

		setInterval(() => {
			var endTime = new Date("28 February 2022 18:00:00 GMT+05:30");
			endTime = Date.parse(endTime) / 1000;

			var now = new Date();
			now = Date.parse(now) / 1000;

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400);
			var hours = Math.floor((timeLeft - days * 86400) / 3600);
			var minutes = Math.floor(
				(timeLeft - days * 86400 - hours * 3600) / 60
			);
			var seconds = Math.floor(
				timeLeft - days * 86400 - hours * 3600 - minutes * 60
			);

			if (hours < "10") {
				hours = "0" + hours;
			}
			if (minutes < "10") {
				minutes = "0" + minutes;
			}
			if (seconds < "10") {
				seconds = "0" + seconds;
			}

			$("#days").html(days + "<span>Days</span>");
			$("#hours").html(hours + "<span>Hours</span>");
			$("#minutes").html(minutes + "<span>Minutes</span>");
			$("#seconds").html(seconds + "<span>Seconds</span>");
		}, 1000);
	}
	render() {
		return (
			<section id="Contact">
				<div className="time">
					<div
						id="timer"
						className="times"
						style={{ position: "relative", height: "20%" }}
					>
						<p className="status">Status: Coming Soon!</p>
						<div id="days" className="times"></div>
						<div id="hours" className="times"></div>
						<div id="minutes" className="times"></div>
						<div id="seconds" className="times"></div>
						<br />

						{/* <FontAwesomeIcon icon={fab} /> */}
						<Grid container>
							<Grid item xs={4} md={2}>
								<a
									href="https://www.facebook.com/hack36mnnit/"
									class="social_img"
								>
									{" "}
									<img
										src={fbimg}
										alt=""
										class="social_img"
										srcset=""
									/>
								</a>
							</Grid>
							<Grid item xs={4} md={2}>
								<a
									href="https://www.instagram.com/hack36_/"
									class="social_img"
								>
									<img
										src={instaimg}
										alt=""
										class="social_img"
										srcset=""
									/>
								</a>
							</Grid>
							<Grid item xs={4} md={2}>
								{" "}
								<a href="https://www.linkedin.com/company/hack36/">
									<img
										src={linkedInimg}
										alt=""
										class="social_img"
										srcset=""
									/>
								</a>
							</Grid>
							<Grid item xs={4} md={2}>
								<a href="https://twitter.com/hack36mnnit">
									{" "}
									<img
										src={twitimg}
										alt=""
										class="social_img"
										srcset=""
									/>
								</a>
							</Grid>
							<Grid item xs={4} md={2}>
								<a href="hackathon@mnnit.ac.in">
									<img
										src={mailimg}
										alt=""
										class="social_img"
										srcset=""
									/>
								</a>
							</Grid>
							<Grid item xs={4} md={2}>
								<a href="http://www.hack36.com">
									<img
										src={wwwimg}
										alt=""
										class="social_img"
										srcset=""
										style={{
											backgroundColor: "white",
											borderRadius: "50%",
											width: "1.6rem",
										}}
									/>
								</a>
							</Grid>
						</Grid>
					</div>
				<div>
					<a href="http://bit.ly/Hack36COC" target="_blank" style={{color:"white", fontSize:"1.3rem"}}>Code of Conduct</a>
				</div>
				<div style={{paddingBottom:"15px"}}>
					<a href="http://mlh.io/code-of-conduct" target="_blank" style={{color:"white", fontSize:"1.3rem"}}>MLH Code of Conduct</a>
				</div>
				</div>
				
			</section>
		);
	}
}
export default Contact;
