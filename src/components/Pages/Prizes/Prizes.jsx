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
					<div className="pcontainer">
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Matic_Logo-Blue.png"
											alt=""
										/>
										<p>₹ 10,000</p>
										<br/>
										<p>Best Hack Built on Ethereum</p>
										{/* <a target="_blank" href="https://sarsij@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2020/csed/Sarsij_Bio_04-09-2020.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>

							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Matic_Logo-Blue.png"
											alt=""
										/>
										<p>₹ 15,000 Internship/Full Time Role Interview Opportunity</p>
										<p>Best Hack Built on Ethereum + Matic</p>
										{/* <a target="_blank" href="https://ashishmaurya@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2021/csed/Dr._Ashish_Kr._Maurya.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>

							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/devfolio.png"
											alt=""
										/>
										<p>T-shirts and Goodies  </p>
										<p>Top 15 teams</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/DO_Logo_horizontal_blue.svg"
											alt=""
										/>
										<p>$250 DO Credits  </p>
										<p>Top 5 Teams Overall + Best Junior Year Team + Best Fresher's Team</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/DO_Logo_horizontal_blue.svg"
											alt=""
										/>
										<p>$100 DO Credits  </p>
										<br/>
										<p>All Participants</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/PrepBytes Logo.png"
											alt=""
										/>
										<p>Paid Internship Interview Offer </p>
										<br/>
										<p>Top 5 Teams</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/PrepBytes Logo.png"
											alt=""
										/>
										<p>T-shirts and Goodies  </p>
										<p>Top 20 teams</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Tezos_Logo-Colored.png"
											alt=""
										/>
										<p> 20,000  </p>
										<br/>
										<p>Best Hack Built on Tezos</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Portis_Logo-Colored_Black.png"
											alt=""
										/>
										<p> 15,000  </p>
										<br/>
										<p>Best Hack Built on Portis</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/inmovidu.png"
											alt=""
										/>
										<p>Free Industrial Training  </p>
										<p>All Members of Winning Team</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Axure_logo_400.svg"
											alt=""
										/>
										<p>Winners Certificate and
Free 1-year subscription licenses of Axure RP Team Edition.  </p>
<br/>
										<p>All Members of Winning Team</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/proto.io.svg"
											alt=""
										/>
										<p>Fully-Featured 60-days Liscense  </p>
										<p>All Participants</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Updated No Starch Logo.png"
											alt=""
										/>
										<p>$20 ebook vouchers  </p>
										<br/>
										<p>All Members of Best Fresher's Team</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Updated No Starch Logo.png"
											alt=""
										/>
										<p>20% Discount Copoun  </p>
										<br/>
										<p>All Participants</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
			
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Wolfram.png"
											alt=""
										/>
										<p>$25 worth Wolfram|One for 30 days  </p>
										<p>All Participants</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/Wolfram.png"
											alt=""
										/>
										<p>$375 Wolfram Awards via Award Letters   </p>
										<p>Top 10 Teams</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
					
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/sketch-1.svg"
											alt=""
										/>
										<p>Set of Licenses</p>
										<p>Best Design Made on Sketch</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/sketch-1.svg"
											alt=""
										/>
										<p>50% off on Sketch Licenses</p>
										<p>All Participants</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
		
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/datacamp.png"
											alt=""
										/>
										<p>$399 worth Premium-License for Datacamp </p>
										<p>All Participants</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/datacamp.png"
											alt=""
										/>
										<p>T-shirts and Goodies </p>
										<p>Top 10 Teams</p>
										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
							<div className="pbox">
								<span></span>
								<div className="pcontent">
									<center>
										<img
											className="pphoto"
											src="images/egghead.png"
											alt=""
										/>
										<p>$250 worth a year of Egghead.io  </p>
										<p>Best Fresher's Team + Best Junior Year Team</p>
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
