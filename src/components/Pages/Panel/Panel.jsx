import React, { Component, useState, useEffect } from "react";
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
import $ from "jquery";

function Panel() {
	const [show, setShow] = useState(false);
	const [con, setcon] = useState("");
	const [txt, settxt] = useState("");
	const [image, setimage] = useState("");

	const handleClose = () => {
		setShow(false);
		$("html, body").css("overflowY", "auto");
	};
	const handleShow = (ab, txt, image) => {
		setShow(true);
		setcon(ab);
		settxt(txt);
		setimage(image);
	};

	return (
		<>
			<section id="Prize">
				<h1 style={{ "font-family": "Jura" }}>Panel</h1>
				<br />
				<div className="panel_container">
					<div className="panel_card">
						<div className="panel_content">
							<h2>Ashish Dubey</h2>
							<p>
								Principal Senior Architect <br />
								Amazon Web Services
							</p>
							<a
								style={{ cursor: "pointer" }}
								variant="primary"
								onClick={() =>
									handleShow(
										"Ashish Dubey",
										"Ashish Dubey graduated in Computer Science from MNNIT Allahabad in 2004. He started his professional career with Hughes Software Systems and later joined companies like Microsoft, Lunexa ( Acquired by Teradata ), Qubole. He is currently working for AWS in Singapore. In the last 17 years, Ashish has had a mix of Enterprise and Early Stage Startup experience in the Data Analytics and Cloud Computing domains. For the last 10 years, Ashish has been leading global teams of Technical Architects in different geographies such as the US, EMEA, and the Asia Pacific.",
										"images/AshishHeadshot.png"
									)
								}
							>
								Read More
							</a>
						</div>
						<img src="images/AshishHeadshot.png" alt="" srcset="" />
					</div>
					<div className="panel_card">
						<div className="panel_content">
							<h2>Gundeep Singh </h2>
							<p>Founder, Honcho</p>
							<a
								style={{ cursor: "pointer" }}
								variant="primary"
								onClick={() =>
									handleShow(
										"Gundeep Singh",
										"The next judge of our Hack36 panel is a man who dons quite a few feathers on his cap. With a Master’s degree in Computer Science from Columbia University and an MBA from Harvard, Mr. Gundeep S has worked at tech giants such as Amazon, Microsoft, IBM and Cisco, while being a teaching staff at Harvard, also co-founded 3 companies one of them being Custard-Apple Technologies (CAT),  which has trained 40,000+ individuals on Information and Cyber Security and the other one is JOTdown, he is currently engaged with Honcho. He is also a TEDx speaker having proud privilege of being a keynote speaker to eminent gatherings at prestigious institutes such as IIT, CBI, IMA and a gold awardee with the International Award for Young People. He has to his credit today, several articles, and over thirty research publications. His role in various international IEEE and WASET conferences includes being the Chair and Reviewer.  Earlier he as been a part of Hackathons conducted by ADi (application development initiative) at Columbia University, Northeastern University, New York University, Suny Buffalo University.",
										"images/Gundeep.png"
									)
								}
							>
								Read More
							</a>
						</div>
						<img src="images/Gundeep.png" alt="" srcset="" />
					</div>
				</div>
				<div className="panel_container">
					<div className="panel_card">
						<div className="panel_content">
							<h2>Shakti Goap</h2>
							<p>
								Founder and CEO
								<br />
								Devfolio
							</p>
							<a
								style={{ cursor: "pointer" }}
								variant="primary"
								onClick={() =>
									handleShow(
										"Shakti Goap",
										"Shakti Goap, is an NIT Surat Alumni, he has also founded Devfolio, which helps organizers to host hackathons all over the world, and Fold, which is a mobile-first bank for the internet-native Indians. Apart from these, he is a founder of Hack InOut and ETHIndia, which are India's largest hackathon communities.",
										"images/pi.png"
									)
								}
							>
								Read More
							</a>
						</div>
						<img src="images/pi.png" alt="" srcset="" />
					</div>
				</div>
				<div className="panel_container">
					<div className="panel_card">
						<div className="panel_content">
							<h2>Shyam Jha</h2>
							<p>
								Senior VP of Engineering <br />
								NetSPI
							</p>
							<a
								style={{ cursor: "pointer" }}
								variant="primary"
								onClick={() =>
									handleShow(
										"Shyam Jha",
										"Shyam P Jha, an alumnus of the National Institute Of Technology, Kurukshetra, is currently serving as the Senior Vice President Of Engineering at NetSPI,  a Threat and Vulnerability Management and Penetration Testing company. Prior to this, he has worked with major multinational companies such as Siemens, Wipro, Symantec Corporation (now Broadcom) and FireEye (thru the acquisition of iSight Partners). Shyam P Jha boasts more than 22 years of experience in various software engineering roles, particularly cybersecurity, cyber threat intelligence, data protection & telecom domain. We are so honoured to present him as our first judge of Hack36.",
										"images/Shyam.png"
									)
								}
							>
								Read More
							</a>
						</div>
						<img src="images/Shyam.png" alt="" srcset="" />
					</div>
					<div className="panel_card">
						<div className="panel_content">
							<h2>Mahesh Kumar</h2>
							<p>
								Director of Engineering <br />
								Flipkart
							</p>
							<a
								style={{ cursor: "pointer" }}
								variant="primary"
								onClick={() =>
									handleShow(
										"Mahesh Kumar",
										"Mahesh Kumar is an alumnus of BITS Pilani and has worked with some of the most reputed companies including Oracle and Tech Mahindra. Currently, he serves as the Director of Engineering at Flipkart where he leads the Data Science and Engineering for Flipkart Fintech Insights. With over two decades of experience, he is a veteran of the software world who loves to build, scale and lead high-performance engineering.",
										"images/pn.png"
									)
								}
							>
								Read More
							</a>
						</div>
						<img src="images/pn.png" alt="" srcset="" />
					</div>
				</div>
			</section>
			<Modal show={show} onHide={handleClose} animation={true}>
				<Modal.Header closeButton>
					{/* <center>
          <Modal.Title id="example-custom-modal-styling-title">
            Hack36 Team
          </Modal.Title>
        </center> */}
				</Modal.Header>
				<Modal.Body>
					<h1 className="heading ">{con} </h1>

					<center>
						{" "}
						<img
							className="panelimg"
							src={image}
							alt=""
							srcset=""
						/>
					</center>
					<p>{txt}</p>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Panel;
