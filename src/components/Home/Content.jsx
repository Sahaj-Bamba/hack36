import landing2 from "../../files/Landing/LandingPage_mobile2.svg";
import landing3 from "../../files/Landing/LandingPage_mobile1.svg";
import React from "react";
// import Base from "../Pages/Base/Base";
import About from "../Pages/About/About";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "./Content.scss";
import landing1 from "../../files/Landing/LandingPage_mobile3.svg";

const useStyles = makeStyles({
	"@keyframes changeInMilo": {
		"0%": {
			backgroundImage: `url(${landing1})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
		"28%": {
			backgroundImage: `url(${landing1})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
		"34%": {
			backgroundImage: `url(${landing2})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
		"60%": {
			backgroundImage: `url(${landing2})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
		"68%": {
			backgroundImage: `url(${landing3})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
		"100%": {
			backgroundImage: `url(${landing3})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
		},
	},
	contentMilo: {
		padding: "5%",
		animationName: "$changeInMilo",
		animationTimingFunction: "ease-in-out",
		animationIterationCount: "infinite",
		animationDuration: "8s",
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
});

function Content() {
	const classes = useStyles();

	return (
		<section >
			<div className="content-main">
				{/* <Base /> */}
				{/* <ComingSoon /> */}
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
				>
					<Grid item md={5} xs={10} className="content-milo">
						<div className={classes.contentMilo}></div>
					</Grid>
					<Grid item md={5} xs={10}>
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
