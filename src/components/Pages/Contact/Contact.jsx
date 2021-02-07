import React, { Component } from 'react'
import "./Contact.scss";
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component  {	
	
	componentDidMount(){
		
		setInterval(() => {
			
        var endTime = new Date("19 April 2021 00:00:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

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
		<div  className="time" >

			<div id="timer" className="times" style={{ position: 'relative', height: '20%'}}>
			<p className="status">Status: Coming Soon!</p>
			<div id="days" className="times"></div>
			<div id="hours" className="times"></div>
			<div id="minutes" className="times"></div>
			<div id="seconds" className="times"></div>
			<br/>
			
		<div className="socials left">
			{/* <FontAwesomeIcon icon={fab} /> */}
			<FontAwesomeIcon icon={faHome} />
			<FontAwesomeIcon icon={faHome} />
		</div>
		<div className="socials right">
		<i class="fas fa-stroopwafel"></i>
			<FontAwesomeIcon icon={faHome} />
			<FontAwesomeIcon icon={faHome} />
		</div>				
		</div>
	</div>);
	}
}
export default Contact;