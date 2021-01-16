import React, { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { changeMenu} = this.props;
		
		return (
			<div className="NavBar">
				<span className="NavItem" onClick={(event)=>changeMenu(event,"Home")} >Home</span>
				<span className="NavItem" onClick={(event)=>changeMenu(event,"About")} >About</span>
				<span className="NavItem" onClick={(event)=>changeMenu(event,"Timeline")} >Timeline</span>
				<span className="NavItem" onClick={(event)=>changeMenu(event,"Theme")} >Theme</span>
				<span className="NavItem" onClick={(event)=>changeMenu(event,"Sponsor")} >Sponsor</span>
				<span className="NavItem" onClick={(event)=>changeMenu(event,"FAQ")} >FAQ</span>
			</div>
		);
	}
}

export default Navbar;
