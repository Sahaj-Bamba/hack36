import React, { Component } from "react";
import "./Panel.scss";
import p1 from "../../../files/Prizes/1st-png.png";
import p2 from "../../../files/Prizes/2nd-png.png";
import p3 from "../../../files/Prizes/3rd-png.png";
import podium from "../../../files/Prizes/podium_1.png";
import { Modal } from "react-bootstrap";
import fb from "../../../files/Team/icons/facebook-01.svg";
import linkedIn from "../../../files/Team/icons/linkedin-01.svg";
import wwwimg from "../../../files/Team/icons/web-01.svg";
import mailimg from "../../../files/Team/icons/mail-01.svg";
import code from "../../../files/Team/icons/codechef.svg";
import git from "../../../files/Team/icons/github-01.svg";

class Prizes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<section id="Prize">
					<h1 style={{ "font-family": "Jura" }}>Panel</h1>
					<br />
					<div className="panel_container">
						<div className="panel_card">
							<div className="panel_content">
								<h2>Ashish Dubey</h2>
								<p>Principal Senior Architect <br/>Amazon Web Services</p>
								<a href="http://">Read More</a>
							</div>
							<img src="images/AshishHeadshot.png" alt="" srcset=""/>
						</div>
						<div className="panel_card">
							<div className="panel_content">
								<h2>Gundeep Singh </h2>
								<p>Founder, Honcho</p>
								<a href="http://">Read More</a>
							</div>
							<img src="images/Gundeep.png"  alt="" srcset=""/>
						</div>
					
				</div>
				<div className="panel_container">
							<div className="panel_card">
							<div className="panel_content">
								<h2>Shyam Jha</h2>
								<p>Senior VP of Engineering <br/>NetSPI</p>
								<a href="http://">Read More</a>
							</div>
							<img src="images/Shyam.png" alt="" srcset=""/>
						</div>
				</div>
				
				</section>
				<Modal

					dialogClassName="modal-90"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<Modal.Header closeButton>
						{/* <center>
          <Modal.Title id="example-custom-modal-styling-title">
            Hack36 Team
          </Modal.Title>
        </center> */}
					</Modal.Header>
					<Modal.Body>
						<h1 className="heading">Faculty Co-ordinators</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						</Modal.Body>
				</Modal>
		
			</>
		);
	}
}

export default Prizes;
