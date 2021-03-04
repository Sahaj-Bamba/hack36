import React, { useEffect, useState } from "react";
import fb from "../../../files/Team/icons/facebook-01.svg";
import linkedIn from "../../../files/Team/icons/linkedin-01.svg";
import wwwimg from "../../../files/Team/icons/web-01.svg";
import mailimg from "../../../files/Team/icons/mail-01.svg";
import code from "../../../files/Team/icons/codechef.svg";
import git from "../../../files/Team/icons/github-01.svg";
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
import p14 from "../../../files/Team/p14.jpeg";
import p15 from "../../../files/Team/p15.jpg";
import p16 from "../../../files/Team/p16.jpg";
import p17 from "../../../files/Team/p17.jpg";
import p18 from "../../../files/Team/p18.jpg";
import p19 from "../../../files/Team/p19.jpg";
import p20 from "../../../files/Team/p20.jpg";
import p21 from "../../../files/Team/p21.jpg";
import p22 from "../../../files/Team/p22.jpg";
import p23 from "../../../files/Team/p23.jpg";
import p24 from "../../../files/Team/p24.jpeg";
import p25 from "../../../files/Team/p25.jpg";
import p26 from "../../../files/Team/p26.jpg";
import p27 from "../../../files/Team/p27.jpeg";
import p28 from "../../../files/Team/p28.jpg";
import p29 from "../../../files/Team/p29.jpg";
import p30 from "../../../files/Team/p30.jpg";
import p31 from "../../../files/Team/p31.jpg";
import p32 from "../../../files/Team/p32.jpg";
import p33 from "../../../files/Team/p33.jpg";
import p34 from "../../../files/Team/p34.jpg";
import p35 from "../../../files/Team/p35.jpg";
import p36 from "../../../files/Team/p36.jpg";

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

										{/* <a target="_blank" href="https://sarsij@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2020/csed/Sarsij_Bio_04-09-2020.pdf"><img src={wwwimg} /></a> */}
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

										{/* <a target="_blank" href="https://ashishmaurya@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2021/csed/Dr._Ashish_Kr._Maurya.pdf"><img src={wwwimg} /></a> */}
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

										{/* <a target="_blank" href="https://mayukh@mnnit.ac.in"><img src={mailimg} /></a>
                    <a target="_blank" href="http://www.mnnit.ac.in/images/newstories/2017/facpropic/Mayukh_CV_new.pdf"><img src={wwwimg} /></a> */}
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
										<a
											target="_blank"
											href="https://www.facebook.com/anuj.descifrado"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/descifrado/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:anuj.20174047@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/descifrado"
										>
											<img src={git} />
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

										<a
											target="_blank"
											href="https://www.facebook.com/shashwat.pandey.3979/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/shashwatpandey1998/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:shashwatpandey@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/shashwat1998"
										>
											<img src={git} />
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
											src={p29}
											alt=""
										/>
										<p>Arsh Singh</p>

										<a
											target="_blank"
											href="https://facebook.com/arshsingh474"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/arshsingh474/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:arsh@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/iosdev474"
										>
											<img src={git} />
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
										<a
											target="_blank"
											href="https://www.facebook.com/nitin.doodhiya.3"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/nitin-98/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:nitin@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://nitindoodhiya.github.io/"
										>
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

										<a
											target="_blank"
											href="https://www.facebook.com/profile.php?id=100008671153032"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/sahaj-bamba/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:sahaj@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://sahaj-bamba.github.io/"
										>
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

										<a
											target="_blank"
											href="https://www.facebook.com/nimesh.maheshwari.12"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="http://www.linkedin.com/in/nimesh12maheshwari"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:nimesh12maheshwari@gmail.com"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/nimesh12maheshwari"
										>
											<img src={git} />
										</a>
									</center>
								</div>
							</div>
						</div>

						<h1 className="heading">Design Team</h1>
						<hr className="hr1" />
						<hr className="hr2" />

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p33}
											alt=""
										/>
										<p>Sai Krishna</p>
										<a
											target="_blank"
											href="https://www.facebook.com/psikrishna/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/psikrishna/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:it178018@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/psikrishna"
										>
											<img src={git} />
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
											src={p34}
											alt=""
										/>
										<p>Shishir Agrahari</p>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/shishiragrahari0310"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:Shishir@mnnit.ac.in"
										>
											<img src={mailimg} />
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
										<a
											target="_blank"
											href="http://www.facebook.com/HeyImPrachi/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="http://www.linkedin.com/in/prachipandey157"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:prachi.20178059@mnnit.ac.in"
										>
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

										<a
											target="_blank"
											href="https://www.facebook.com/ankitjain.257/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/jankit311/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:ankit.jain@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/jankit311"
										>
											<img src={git} />
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

										<a
											target="_blank"
											href="https://www.facebook.com/anzum.bano.54"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/anzumbano"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:anzum@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/anzumbano"
										>
											<img src={git} />
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
										<a
											target="_blank"
											href="https://www.facebook.com/profile.php?id=100010670734414"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/tanisha-kumbhakar"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:tanisha.20175007@mnnit.ac.in"
										>
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

										<a
											target="_blank"
											href="https://www.facebook.com/simran.kumari.1466/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/simrankumari30/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:kumarisimran@mnnit.ac.in"
										>
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
											src={p15}
											alt=""
										/>
										<p>Arpit Yadav</p>

										<a
											target="_blank"
											href="https://www.facebook.com/arpit.yadav.779857"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/yadavarpit771999?_l=en_US"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:arpit.20174111@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/ace-ezer"
										>
											<img src={git} />
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
											src={p9}
											alt=""
										/>
										<p>Sudhanshu</p>

										<a
											target="_blank"
											href="https://www.facebook.com/profile.php?id=100004552236570"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/sudhanshu-choudhary/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:sudhanshu.kr@mnnit.ac.in"
										>
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

										<a
											target="_blank"
											href="https://www.facebook.com/darshika.dadhich.3/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/darshika1610/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:darshika@mnnit.ac.in"
										>
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
											src={p35}
											alt=""
										/>
										<p>Abdul Khadar</p>

										<a
											target="_blank"
											href="https://www.facebook.com/itsAbdulKhadar/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/itsabdulkhadar/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:mohammed.20178057@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
									</center>
								</div>
							</div>
						</div>

						<h1 className="heading">Networking Team</h1>
						<hr className="hr1" />
						<hr className="hr2" />
						<div className="box">
							<span></span>
							<div className="content">
								<center>
									<img className="uphoto" src={p17} alt="" />
									<p>Vivek Rathi</p>

									<a
										target="_blank"
										href="https://www.facebook.com/Vivek.Rathi.MNNIT"
									>
										<img src={fb} />
									</a>
									<a
										target="_blank"
										href="https://www.linkedin.com/in/vivekrathi53/"
									>
										<img src={linkedIn} />
									</a>
									<a
										target="_blank"
										href="mailto:vivekrathi@mnnit.ac.in"
									>
										<img src={mailimg} />
									</a>
									<a
										target="_blank"
										href="https://www.codechef.com/users/vivek_rathi_53"
									>
										<img src={code} />
									</a>
								</center>
							</div>
						</div>

						<div className="container">
							<div className="box">
								<span></span>
								<div className="content">
									<center>
										<img
											className="uphoto"
											src={p24}
											alt=""
										/>
										<p>Shrey Pandey</p>
										<a
											target="_blank"
											href="https://www.facebook.com/moonknight2076/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="www.linkedin.com/in/shrey2076"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:shrey@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/Shreypandey"
										>
											<img src={git} />
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
											src={p25}
											alt=""
										/>
										<p>Ashutosh Sabat</p>

										<a
											target="_blank"
											href="https://www.facebook.com/ashutoshsabat2"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/ashutosh-sabat-6a8bbb158"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:ashutosh.20170035@mnnit.ac.in"
										>
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
											src={p31}
											alt=""
										/>
										<p>Siddhi Mahawar</p>

										<a
											target="_blank"
											href="https://www.facebook.com/siddhi.mahawar"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/siddhi-999/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:siddhi@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://siddhi-mahawar.github.io/"
										>
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
											src={p32}
											alt=""
										/>
										<p>Tanuj Sahney</p>

										<a
											target="_blank"
											href="https://www.facebook.com/tanuj.sahney/"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/tanuj-sahney-2b3748156/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:tanujsahney@mnnit.ac.in"
										>
											<img src={mailimg} />
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
											src={p36}
											alt=""
										/>
										<p>Manas Uniyal</p>
										<a
											target="_blank"
											href="https://www.facebook.com/manas.uniyal.1"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/manasuniyal"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:manas.20178034@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="https://github.com/ManasUniyal"
										>
											<img src={git} />
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
											src={p26}
											alt=""
										/>
										<p>Satyam Savita</p>
										<a
											target="_blank"
											href="https://www.facebook.com/profile.php?id=100008154158938"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/satyam-savita-5069ba14a"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:satyamsavita@mnnit.ac.in"
										>
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
											src={p27}
											alt=""
										/>
										<p>Prajjawal Prayank</p>

										<a
											target="_blank"
											href="https://www.facebook.com/Prajjawal.Prayank"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/prajjawal-prayank/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:prajjawal.20174059@mnnit.ac.in"
										>
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
											src={p28}
											alt=""
										/>
										<p>Adarsh Kumar Verma</p>

										<a
											target="_blank"
											href="https://www.facebook.com/adarsh.verma.7777"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/adarsh-verma-78194214a/"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:adarsh.20174064@mnnit.ac.in"
										>
											<img src={mailimg} />
										</a>
										<a
											target="_blank"
											href="http://adarshverma013.github.io/"
										>
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
											src={p30}
											alt=""
										/>
										<p>Ravi Kumar Gupta</p>

										<a
											target="_blank"
											href="https://www.facebook.com/profile.php?id=100004006534925"
										>
											<img src={fb} />
										</a>
										<a
											target="_blank"
											href="https://www.linkedin.com/in/ravi-gupta-4037"
										>
											<img src={linkedIn} />
										</a>
										<a
											target="_blank"
											href="mailto:ravi.20174037@mnnit.ac.in "
										>
											<img src={mailimg} />
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
