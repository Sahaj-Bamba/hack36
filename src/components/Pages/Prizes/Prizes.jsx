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
											src={p1}
											alt=""
										/>
										<p>₹ 25,000</p>

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
											src={p2}
											alt=""
										/>
										<p>₹ 15,000</p>

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
											src={p3}
											alt=""
										/>
										<p>₹ 10,000 </p>

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
