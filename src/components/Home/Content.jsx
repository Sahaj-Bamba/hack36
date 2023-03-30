import miloEat from "../../files/Landing/LandingPage_mobile1.svg";
import miloSleep from "../../files/Landing/LandingPage_mobile2.svg";
import miloCode from "../../files/Landing/LandingPage_mobile3.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import {Grid, Button} from "@material-ui/core";
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

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
						<div className="cm">
							<div className={classes.contentMilo}>
								<div className={classes.MiloEat} id="ME"></div>
								<div className={classes.MiloCode} id="MC"></div>
								<div
									className={classes.MiloSleep}
									id="MS"
								></div>
							</div>
						</div>
					</Grid>
					<Grid item md={5} xs={10} id="HackName" style={{zIndex:"1000"}}>
						{/* <img src={logo} alt="Hack 36" height='60px'/> */}
						<div className="content-c3" style={{fontFamily:"Jura"}}>
						<a href="https://www.prepbytes.com/" target="_blank">
						<img src="images/PrepBytes_Logo_1.png" alt="prepbytes logo" style={{width:"40%", display:"block", margin:"auto"}}/></a>presents
						</div>
						<div className="content-hack36">HACK 36</div>
						<div className="content-c3">
							Caffeinate, Collaborate, Celebrate
						</div>
						<div className="content-dates">APRIL 9-11, 2021</div>
						<br />
						<center>
							{/* <div className="base-button">
								{" "}
								<a
									target="_blank"
									href="https://forms.gle/pvFK7WpctAjWMUGH8"
								>
									Pre Register{" "}
								</a>
							</div> */}
              <div
                class="apply-button"
                data-hackathon-slug="hack36-21"
                data-button-theme="dark"
                style={{height: "44px", width: "312px"}}
              ></div>
            </center>
			<center>
				<Button variant="contained" color="primary" href="https://discord.com/invite/ax7ABZkNU2" target="_blank" style={{height: "44px", width: "312px", textTransform:"unset", backgroundColor:"#7289da"}}>
				<FontAwesomeIcon icon={faDiscord} style={{marginRight:"10px"}}/>Discord Server
				</Button>
			</center>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}

export default Content;
