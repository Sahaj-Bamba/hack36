import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../files/logo-13.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

const iconFaTimes = <FontAwesomeIcon icon={faTimes} />;
const iconFaBars = <FontAwesomeIcon icon={faBars} />;

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<Link to="/">
					<img src={logo} alt="Hack 36" height="100px" />
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					{/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
					{click ? iconFaTimes : iconFaBars}
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<a href="#Home">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
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
						<a href="#">
							<div
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Sponsors
							</div>
						</a>
					</li>
					<li className="nav-item">
						<a href="#">
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
								onClick={closeMobileMenu}
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
		</>
	);
}

export default Navbar;
