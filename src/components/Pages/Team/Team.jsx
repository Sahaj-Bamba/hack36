import React, { useEffect, useState } from "react";
import fb from "../../../files/ContactUs/fb.jpg";
import linkedIn from "../../../files/ContactUs/linkedInimg.jpg";
import wwwimg from "../../../files/ContactUs/wwwimg.jpg";
import mailimg from "../../../files/ContactUs/mailimg.jpg";
// import Navbar from "../../Navbar/Navbar";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import p1 from "../../../files/Team/p1.jpg";
import p2 from "../../../files/Team/p2.jpg";
import p3 from "../../../files/Team/p3.jpg";
import p4 from "../../../files/Team/p4.jpg";
import p5 from "../../../files/Team/p5.jpg";
import p6 from "../../../files/Team/p6.jpg";
import p7 from "../../../files/Team/p7.jpg";
import p8 from "../../../files/Team/p8.jpg";
import p9 from "../../../files/Team/p9.jpg";
import p10 from "../../../files/Team/p10.jpg";
import p11 from "../../../files/Team/p11.jpg";
import p12 from "../../../files/Team/p12.jpg";
import p13 from "../../../files/Team/p13.jpg";
import p14 from "../../../files/Team/p14.jpg";
import p15 from "../../../files/Team/p15.jpg";
import p16 from "../../../files/Team/p16.jpg";
import p17 from "../../../files/Team/p17.jpg";
import p18 from "../../../files/Team/p18.jpg";
import p19 from "../../../files/Team/p19.jpg";
import p20 from "../../../files/Team/p20.jpg";
import p21 from "../../../files/Team/p21.jpg";
import p22 from "../../../files/Team/p22.jpg";
import p23 from "../../../files/Team/p23.jpg";

import "./Team.scss";

function Team(params) {
	const show = params.teamPopup;
	const changeShow = params.changeShow;
	return (
		<div className="maindiv">
			<center>
				<Modal
					show={show}
					onHide={() => changeShow(false)}
					dialogClassName="modal-90w"
					aria-labelledby="example-custom-modal-styling-title"
				>
					<Modal.Header closeButton>
						{/* <center>
          <Modal.Title id="example-custom-modal-styling-title">
            Hack36 Team
          </Modal.Title>
        </center> */}
					</Modal.Header>
					<Modal.Body>
						<h1 className="heading">Faculty Co-ordinators</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p1}
											alt=""
										/>
										<p>Dr. Sarsij Tripathi</p>

										{/* <a href="https://sarsij@mnnit.ac.in"><img src={mailimg} /></a>
                    <a href="http://www.mnnit.ac.in/images/newstories/2020/csed/Sarsij_Bio_04-09-2020.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p2}
											alt=""
										/>
										<p>Dr. Ashish Kumar Maurya</p>

										{/* <a href="https://ashishmaurya@mnnit.ac.in"><img src={mailimg} /></a>
                    <a href="http://www.mnnit.ac.in/images/newstories/2021/csed/Dr._Ashish_Kr._Maurya.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p3}
											alt=""
										/>
										<p> Dr. Mayukh Sarkar</p>

										{/* <a href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>
						</div>
						<h1 className="heading">Team Lead</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p4}
											alt=""
										/>
										<p>Anuj Modi</p>
										<a href="https://www.facebook.com/anuj.descifrado">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/descifrado/">
											<img src={linkedIn} />
										</a>
										<a href="https://anuj.20174047@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://github.com/descifrado">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p5}
											alt=""
										/>
										<p>Shashwat Pandey</p>

										<a href="https://www.facebook.com/shashwat.pandey.3979/">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/shashwatpandey1998/">
											<img src={linkedIn} />
										</a>
										<a href="https://shashwatpandey@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://github.com/shashwat1998">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
						</div>

						<h1 className="heading">Web Team</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p6}
											alt=""
										/>
										<p>Nitin Doodhiya</p>
										<a href="https://www.facebook.com/nitin.doodhiya.3">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/nitin-98/">
											<img src={linkedIn} />
										</a>
										<a href="https://nitin@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://nitindoodhiya.github.io/">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p19}
											alt=""
										/>
										<p>Sahaj Bamba</p>

										<a href="https://www.facebook.com/profile.php?id=100008671153032">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/sahaj-bamba/">
											<img src={linkedIn} />
										</a>
										<a href="https://sahaj@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://sahaj-bamba.github.io/">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p7}
											alt=""
										/>
										<p>Nimesh Maheshwari</p>

										<a href="https://www.facebook.com/nimesh.maheshwari.12">
											<img src={fb} />
										</a>
										<a href="http://www.linkedin.com/in/nimesh12maheshwari">
											<img src={linkedIn} />
										</a>
										<a href="https://nimesh12maheshwari@gmail.com">
											<img src={mailimg} />
										</a>
										<a href="https://github.com/nimesh12maheshwari">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
						</div>

						<h1 className="heading">Content Team</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p20}
											alt=""
										/>
										<p>Prachi Pandey</p>
										<a href="http://www.facebook.com/HeyImPrachi/">
											<img src={fb} />
										</a>
										<a href="http://www.linkedin.com/in/prachipandey157">
											<img src={linkedIn} />
										</a>
										<a href="https://prachi.20178059@mnnit.ac.in">
											<img src={mailimg} />
										</a>
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p12}
											alt=""
										/>
										<p>Ankit Jain</p>

										<a href="https://www.facebook.com/ankitjain.257/">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/jankit311/">
											<img src={linkedIn} />
										</a>
										<a href="https://ankit.jain@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://github.com/jankit311">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p14}
											alt=""
										/>
										<p>Anzum Bano</p>

										<a href="https://www.facebook.com/anzum.bano.54">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/anzumbano">
											<img src={linkedIn} />
										</a>
										<a href="https://anzum@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://github.com/anzumbano">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
						</div>
						<h1 className="heading">Marketing Team</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p16}
											alt=""
										/>
										<p>Tanisha Kumbhakar</p>
										<a href="https://www.facebook.com/profile.php?id=100010670734414">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/tanisha-kumbhakar">
											<img src={linkedIn} />
										</a>
										<a href="https://tanisha.20175007@mnnit.ac.in">
											<img src={mailimg} />
										</a>
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p18}
											alt=""
										/>
										<p>Kumari Simran</p>

										<a href="https://www.facebook.com/simran.kumari.1466/">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/simrankumari30/">
											<img src={linkedIn} />
										</a>
										<a href="https://kumarisimran@mnnit.ac.in">
											<img src={mailimg} />
										</a>
									</center>
								</div>
							</div>
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p17}
											alt=""
										/>
										<p>Vivek Rathi</p>

										<a href="https://www.facebook.com/Vivek.Rathi.MNNIT">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/vivekrathi53/">
											<img src={linkedIn} />
										</a>
										<a href="https://vivekrathi@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										{/* <a href="https://www.codechef.com/users/vivek_rathi_53"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p15}
											alt=""
										/>
										<p>Arpit Yadav</p>

										<a href="https://www.facebook.com/arpit.yadav.779857">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/yadavarpit771999?_l=en_US">
											<img src={linkedIn} />
										</a>
										<a href="https://arpit.20174111@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										{/* <a href="https://github.com/ace-ezer"><img src={wwwimg} /></a> */}
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p9}
											alt=""
										/>
										<p>Sudhanshu</p>

										<a href="https://www.facebook.com/profile.php?id=100004552236570">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/sudhanshu-choudhary/">
											<img src={linkedIn} />
										</a>
										<a href="https://sudhanshu.kr@mnnit.ac.in">
											<img src={mailimg} />
										</a>
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p23}
											alt=""
										/>
										<p>Darshika Sharma</p>

										<a href="https://www.facebook.com/darshika.dadhich.3/">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/darshika1610/">
											<img src={linkedIn} />
										</a>
										<a href="https://darshika@mnnit.ac.in">
											<img src={mailimg} />
										</a>
									</center>
								</div>
							</div>
						</div>

						<h1 className="heading">Networking Team</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p6}
											alt=""
										/>
										<p>Nitin Doodhiya</p>
										<a href="https://www.facebook.com/nitin.doodhiya.3">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/nitin-98/">
											<img src={linkedIn} />
										</a>
										<a href="https://nitin@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://nitindoodhiya.github.io/">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p19}
											alt=""
										/>
										<p>Shahaj Bamba</p>

										<a href="https://www.facebook.com/profile.php?id=100008671153032">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/sahaj-bamba/">
											<img src={linkedIn} />
										</a>
										<a href="https://sahaj@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://sahaj-bamba.github.io/">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p7}
											alt=""
										/>
										<p>Nimesh Maheshwari</p>

										<a href="https://www.facebook.com/nimesh.maheshwari.12">
											<img src={fb} />
										</a>
										<a href="http://www.linkedin.com/in/nimesh12maheshwari">
											<img src={linkedIn} />
										</a>
										<a href="https://nimesh12maheshwari@gmail.com">
											<img src={mailimg} />
										</a>
										<a href="https://github.com/nimesh12maheshwari">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
						</div>

						<h1 className="heading">PR Team</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p6}
											alt=""
										/>
										<p>Nitin Doodhiya</p>
										<a href="https://www.facebook.com/nitin.doodhiya.3">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/nitin-98/">
											<img src={linkedIn} />
										</a>
										<a href="https://nitin@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://nitindoodhiya.github.io/">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>

							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p19}
											alt=""
										/>
										<p>Shahaj Bamba</p>

										<a href="https://www.facebook.com/profile.php?id=100008671153032">
											<img src={fb} />
										</a>
										<a href="https://www.linkedin.com/in/sahaj-bamba/">
											<img src={linkedIn} />
										</a>
										<a href="https://sahaj@mnnit.ac.in">
											<img src={mailimg} />
										</a>
										<a href="https://sahaj-bamba.github.io/">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p7}
											alt=""
										/>
										<p>Nimesh Maheshwari</p>

										<a href="https://www.facebook.com/nimesh.maheshwari.12">
											<img src={fb} />
										</a>
										<a href="http://www.linkedin.com/in/nimesh12maheshwari">
											<img src={linkedIn} />
										</a>
										<a href="https://nimesh12maheshwari@gmail.com">
											<img src={mailimg} />
										</a>
										<a href="https://github.com/nimesh12maheshwari">
											<img src={wwwimg} />
										</a>
									</center>
								</div>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</center>
		</div>
	);
}

export default Team;
