import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../files/logo-13.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Team from "../Pages/Team/Team";
import $ from "jquery";
const iconFaTimes = <FontAwesomeIcon icon={faTimes} />;
const iconFaBars = <FontAwesomeIcon icon={faBars} />;
function teamTriggerFunction(params) {
	var tem = Navbar.closeMobileMenu;
	var t = () => Team.setShow(true);
}
function Navbar() {
	const [teamPopup, setShow] = useState(false);

	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = (event) => {
		setClick(false);
	};

	const changeShow = (val) => {
		setShow(val);
		if (val === false) {
			$("html, body").css("overflowY", "auto");
		}
	};
	const teamTriggerFunction = () => {
		closeMobileMenu();
		setShow(true);
	};

	return (
		<>
			<nav className="navbar">
				{/* <Link to="/">
					<img src={logo} alt="Hack 36" height="100px" />
				</Link> */}
				<a
					id="mlh-trust-badge"
					style={{
						display: "block",
						maxWidth: "100px",
						minWidth: "60px",
						position: "absolute",
						left: "11%",
						top: "0",
						width: "10%",
						zIndex: "1",
					}}
					href="https://mlh.io/seasons/2021/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray"
					target="_blank"
				>
					<img
						src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-gray.svg"
						alt="Major League Hacking 2021 Hackathon Season"
						style={{ width: "100%" }}
					/>
				</a>
				<div className="menu-icon" onClick={handleClick}>
					{/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
					{click ? iconFaTimes : iconFaBars}
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<a href="#">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
								id="homelink"
							>
								Home
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#Aboutid">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
							>
								About
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#timeline">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Timeline
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#Prize">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Prizes
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#Sponsors">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Sponsors
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#Faqid">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
							>
								FAQs
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#">
							<div
								className="nav-links"
								onClick={teamTriggerFunction}
							>
								Team
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#Contact">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Contact
							</div>
						</a>
					</li>
				</ul>
			</nav>
			<Team teamPopup={teamPopup} changeShow={changeShow} />
		</>
	);
}

export default Navbar;
