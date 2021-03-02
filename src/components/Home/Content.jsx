import miloEat from "../../files/Landing/LandingPage_mobile1.svg";
import miloSleep from "../../files/Landing/LandingPage_mobile2.svg";
import miloCode from "../../files/Landing/LandingPage_mobile3.svg";

import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Content.scss";

const useStyles = makeStyles({
	contentMilo: {
		padding: "5%",
		// animationName: "$changeInMilo",
		// animationTimingFunction: "ease-in-out",
		// animationIterationCount: "infinite",
		// animationDuration: "8s",
		// animation-direction: alternate;
		width: "100%",
		maxWidth: "500px",
		height: "500px",
		zIndex: "1",
		position: "relative",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		// backgroundImage: {landing1},
	},
	MiloEat: {
		backgroundImage: `url(${miloEat})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		position: "absolute",
		left: "0px",
		top: "0px",
		width: "100%",
		height: "100%",
	},
	MiloCode: {
		backgroundImage: `url(${miloCode})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		position: "absolute",
		left: "0px",
		top: "0px",
		width: "100%",
		height: "100%",
	},
	MiloSleep: {
		backgroundImage: `url(${miloSleep})`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		position: "absolute",
		left: "0px",
		top: "0px",
		width: "100%",
		height: "100%",
	},
});

function Content() {
	const classes = useStyles();

	return (
		<section>
			<div className="content-main">
				{/* <Base /> */}
				{/* <ComingSoon /> */}
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid item md={5} xs={10} className="content-milo ">
						<div className={classes.contentMilo}>
							<div className={classes.MiloEat} id="ME"></div>
							<div className={classes.MiloCode} id="MC"></div>
							<div className={classes.MiloSleep} id="MS"></div>
						</div>
					</Grid>
					<Grid item md={5} xs={10} id="HackName">
						{/* <img src={logo} alt="Hack 36" height='60px'/> */}
						<div className="content-hack36">HACK 36</div>
						<div className="content-c3">
							Caffeinate, Collaborate, Celebrate
						</div>
						<div className="content-dates">APRIL 9-11, 2021</div>
						<br />
						<center>
							<div className="base-button">
								{" "}
								<a
									target="_blank"
									href="https://forms.gle/pvFK7WpctAjWMUGH8"
								>
									Pre Register{" "}
								</a>
							</div>
						</center>
					</Grid>
				</Grid>
			</div>
		</section>
	);
}

export default Content;
