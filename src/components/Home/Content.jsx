import React, { Component } from "react";
// import Base from "../Pages/Base/Base";
// import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import Grid from '@material-ui/core/Grid';
import './Content.scss';
import logo from '../../files/logo.png'

class Content extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		// const { activeMenu } = this.props;

		return (
			<div className="content-main">
				{/* <Base /> */}
				{/* <ComingSoon /> */}
				<Grid container  direction="row"  justify="center"  alignItems="center">
        			<Grid item md={5} xs={10}>
						<div className="content-milo"></div>
					</Grid>
        			<Grid item md={5} xs={10}>
						{/* <img src={logo} alt="Hack 36" height='60px'/> */}
						<div className="content-hack36">HACK 36</div>
						<div className="content-c3">Caffeinate, Collaborate, Celebrate</div>
						<div className="content-dates">APRIL 9-11, 2021</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Content;
