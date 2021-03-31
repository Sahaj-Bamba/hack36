import React, { Component } from "react";
import "./Prizes.scss";
import p1 from "../../../files/Prizes/1st-png.png";
import p2 from "../../../files/Prizes/2nd-png.png";
import p3 from "../../../files/Prizes/3rd-png.png";
import podium from "../../../files/Prizes/podium_1.png";

class Prizes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<>
				<section id="Prize">
					<h1 style={{ "font-family": "Jura" }}>Prizes</h1>
					<br />
					<div className="prizeHolder">
						<img src={podium} className="podium" alt="" srcset="" />
						<img src={p1} className="prize1" alt="" srcset="" />
						<img src={p2} className="prize2" alt="" srcset="" />
						<img src={p3} className="prize3" alt="" srcset="" />
					</div>

					<div className="container">
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="logo-13.png"
										alt=""
									/>
									<h3>₹ 10,000 </h3>
									<br />
									<p className="Top">Best All Girls Team</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="logo-13.png"
										alt=""
									/>
									<h3>
										T-shirts <br />& <br />
										Goodies{" "}
									</h3>
									<p className="Top">All Participants</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/PrepBytes Logo.png"
										alt=""
									/>
									<h3>Paid Internship Interview Offer </h3>
									<br />
									<p className="Top">Top 5 Teams</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/PrepBytes Logo.png"
										alt=""
									/>
									<h3>
										T-shirts <br />& <br />
										Goodies{" "}
									</h3>
									<p className="Top">Top 20 teams</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Matic_Logo-Blue.png"
										alt=""
									/>
									<h3>Internship/Full Time Role </h3>
									<p className="description">
										{" "}
										Interview Opportunity
									</p>
									<p className="Top">
										Best Hack Built on Ethereum + Matic
									</p>
									{/* <a target="_blank" href="https://ashishmaurya@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2021/csed/Dr._Ashish_Kr._Maurya.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Matic_Logo-Blue.png"
										alt=""
									/>
									<h3>₹ 10,000</h3>
									<br />
									<p className="Top">
										Best Hack Built on Ethereum
									</p>
									{/* <a target="_blank" href="https://sarsij@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2020/csed/Sarsij_Bio_04-09-2020.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Matic_Logo-Blue.png"
										alt=""
									/>
									<h3>₹ 15,000 </h3>
									<br />
									{/* <p className="description"> & Internship/Full Time Role Interview Opportunity</p> */}
									<p className="Top">
										Best Hack Built on Ethereum + Matic
									</p>
									{/* <a target="_blank" href="https://ashishmaurya@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2021/csed/Dr._Ashish_Kr._Maurya.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcc5173fd-2a6a-434e-9d48-1883d77bfc9f%2F_Colored.png?table=block&id=d55db242-49ff-4e05-8fae-865dc9b77873&width=2730&userId=&cache=v2"
										alt=""
									/>
									<h3>
										T-shirts <br />& <br />
										Goodies{" "}
									</h3>
									<p className="Top">Top 15 teams</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Tezos_Logo-Colored.png"
										alt=""
									/>
									<h3>₹ 20,000 </h3>
									<br />
									<p className="Top">
										Best Hack Built on Tezos
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Portis_Logo-Colored_Black.png"
										alt=""
									/>
									<h3>₹ 15,000 </h3>
									<br />
									<p className="Top">
										Best Hack Built on Portis
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/datacamp.png"
										alt=""
									/>
									<h3>$399 </h3>{" "}
									<p className="description">
										{" "}
										worth Premium-License for Datacamp{" "}
									</p>
									<p className="Top">All Participants</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/datacamp.png"
										alt=""
									/>
									<h3>
										T-shirts <br />& <br />
										Goodies{" "}
									</h3>
									<p className="Top">Top 10 Teams</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/DO_Logo_horizontal_blue.svg"
										alt=""
									/>
									<h3>$250 DO Credits </h3>
									<p className="Top">Top 5 Teams </p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/DO_Logo_horizontal_blue.svg"
										alt=""
									/>
									<h3>$250 DO Credits </h3>
									<p className="Top">Best Sophomore Team </p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/DO_Logo_horizontal_blue.svg"
										alt=""
									/>
									<h3>$250 DO Credits </h3>
									<p className="Top">Best Freshers Team</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/DO_Logo_horizontal_blue.svg"
										alt=""
									/>
									<h3>$100 DO Credits </h3>
									<br />
									<p className="Top">All Participants</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/inmovidu.png"
										alt=""
									/>
									<h3>Free Industrial Training </h3>
									<p className="Top">
										All Members of Winning Team
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Axure_logo_400.svg"
										alt=""
									/>
									<h3>Certificate and subscription</h3>
									<p className="description">
										Winners Certificate and Free 1-year
										subscription licenses of Axure RP Team
										Edition.{" "}
									</p>

									<p className="Top">
										All Members of Winning Team
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Wolfram.png"
										alt=""
									/>
									<h3>$375 </h3>{" "}
									<p className="description">
										{" "}
										Wolfram Awards via Award Letters{" "}
									</p>
									<p className="Top">Top 10 Teams</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/proto.io.svg"
										alt=""
									/>
									<h3>Fully-Featured 60-days Liscense </h3>
									<p className="Top">All Participants</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Updated No Starch Logo.png"
										alt=""
									/>
									<h3>$20 ebook vouchers </h3>
									<br />
									<p className="Top">
										All Members of Best Fresher's Team
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Updated No Starch Logo.png"
										alt=""
									/>
									<h3>20% Discount </h3>

									<h3>Coupon</h3>

									<p className="Top">All Participants</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/Wolfram.png"
										alt=""
									/>
									<h3>$25 </h3>
									<p className="description">
										worth Wolfram|One for 30 days{" "}
									</p>
									<p className="Top">All Participants</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/sketch-1.svg"
										alt=""
									/>
									<h3>Licenses</h3>
									<p className="Top">
										Best Design Made on Sketch
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/sketch-1.svg"
										alt=""
									/>
									<h3>50% off on Sketch Licenses</h3>
									<p className="Top">All Participants</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/egghead.png"
										alt=""
									/>
									<h3>$250 </h3>{" "}
									<p className="description">
										{" "}
										worth a year of Egghead.io{" "}
									</p>
									<p className="Top">Best Freshers Team </p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/egghead.png"
										alt=""
									/>
									<h3>$250 </h3>{" "}
									<p className="description">
										{" "}
										worth a year of Egghead.io{" "}
									</p>
									<p className="Top"> Best Sophomores Team</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/1password.png"
										alt=""
									/>
									<h3>
										Family accounts
										<br /> free 6 months{" "}
									</h3>
									<p className="Top"> Top 3 Teams</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/1password.png"
										alt=""
									/>
									<h3>
										Family accounts
										<br /> free 6 months{" "}
									</h3>
									<p className="Top"> Best Freshers Teams</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>

						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="https://www.digikey.in/-/media/Images/Header/logo_dk.png?la=en-IN&ts=1a773fa3-b656-418a-8e50-67fff895081a"
										alt=""
									/>
									<h3>Grove Beginner Kit </h3>
									<p className="Top">
										Best Hardware Hack Sponsored by Digi-key
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/linode.png"
										alt=""
									/>
									<h3>
										Raspberry Pi 4<br></br> Starter Kit
									</h3>
									<p className="Top">Best use of Linode</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
						<div className="box ppbox">
							<span></span>
							<div className="pcontent">
								<center>
									<img
										className="pphoto"
										src="images/GoDaddy.png"
										alt=""
									/>
									<h3>Hack from Home Kit </h3>
									<p className="Top">
										Best domain name from GoDaddy Registery
									</p>
									{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
								</center>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Prizes;
