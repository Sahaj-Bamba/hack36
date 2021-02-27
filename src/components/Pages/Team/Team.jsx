import React, { useEffect, useState } from "react";
import fb from "../../../files/ContactUs/fb.jpg";
import linkedIn from "../../../files/ContactUs/linkedInimg.jpg";
import wwwimg from "../../../files/ContactUs/wwwimg.jpg";
import mailimg from "../../../files/ContactUs/mailimg.jpg";
// import Navbar from "../../Navbar/Navbar";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
          <hr className="hr1"/>
          <hr className="hr2"/>

        <div className="container">
          <div className="box">
          <span></span>
          <div className="content">
            <center>
              
            <img className="uphoto" src="https://scontent.fbho3-1.fna.fbcdn.net/v/t1.0-9/138123505_2909348155975824_6810706816553795342_o.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_ohc=BmA0ueNVomYAX_ssfwu&_nc_ht=scontent.fbho3-1.fna&oh=4d6ba2af4ec3f72687fb84c53db652f1&oe=605B2526" alt=""/>
                    <p>Nitin Doodhiya</p>
                    
                    <a href="https://www.facebook.com/nitin.doodhiya.3"><img src={fb} /></a>
                    <a href="https://www.linkedin.com/in/nitin-98/"><img src={linkedIn} /></a>
                    <a href="https://nitindoodhiya@gmail.com"><img src={mailimg} /></a>
                    <a href="https://nitindoodhiya.github.io"><img src={wwwimg} /></a>
            </center>
          </div>
          </div>
        
          <div className="box">
          <span></span>
          <div className="content">
            <center>
              
            <img className="uphoto" src="https://scontent.frpr1-1.fna.fbcdn.net/v/t31.0-8/28953946_1863809723918048_7960042119985733555_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=nilvMyBoE84AX-6Pa8w&_nc_ht=scontent.frpr1-1.fna&oh=8b12f0eb1862d0fc2c6001035f6a2c4b&oe=605FF3AA" alt=""/>
                    <p>Sahaj Bamba</p>
                    
                    <a href="default.asp"><img src={fb} /></a>
                    <a href="default.asp"><img src={linkedIn} /></a>
                    <a href="default.asp"><img src={mailimg} /></a>
                    <a href="default.asp"><img src={wwwimg} /></a>
                    
            </center>
          </div>
          </div>
        
          <div className="box">
          <span></span>
          <div className="content">
            <center>
              
            <img className="uphoto" src="https://scontent.frpr1-1.fna.fbcdn.net/v/t1.0-9/38411662_1765821966847987_5138325261766361088_n.jpg?_nc_cat=109&ccb=3&_nc_sid=09cbfe&_nc_ohc=xVt0O0FLB7oAX9Uw9F_&_nc_ht=scontent.frpr1-1.fna&oh=d8d8fa9d0935f85a9b1df9dae653ffcd&oe=606081A2" alt=""/>
                    <p>Shashwat Pandey</p>
                    
                    <a href="default.asp"><img src={fb} /></a>
                    <a href="default.asp"><img src={linkedIn} /></a>
                    <a href="default.asp"><img src={mailimg} /></a>
                    <a href="default.asp"><img src={wwwimg} /></a>
                    
            </center>
          </div>
          </div>
        
          <div className="box">
          <span></span>
          <div className="content">
            <center>
              
            <img className="uphoto" src="https://scontent.fbho3-1.fna.fbcdn.net/v/t1.0-9/138123505_2909348155975824_6810706816553795342_o.jpg?_nc_cat=111&ccb=3&_nc_sid=09cbfe&_nc_ohc=BmA0ueNVomYAX_ssfwu&_nc_ht=scontent.fbho3-1.fna&oh=4d6ba2af4ec3f72687fb84c53db652f1&oe=605B2526" alt=""/>
                    <p>Nitin Doodhiya</p>
                    
                    <a href="default.asp"><img src={fb} /></a>
                    <a href="default.asp"><img src={linkedIn} /></a>
                    <a href="default.asp"><img src={mailimg} /></a>
                    <a href="default.asp"><img src={wwwimg} /></a>
                    
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
