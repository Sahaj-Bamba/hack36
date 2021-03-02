import React, { Component } from "react";
import "./Sponsor.scss";
import $ from "jquery";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

class Sponsor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var intersectionOptions = {
      root: null, // use the viewport
      rootMargin: "0px",
      threshold: 0.3,
    };

    function intersectionCallback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.3) {
          //window.location = "#Sponsors";
        } else {
        }
      });
    }
    var observer = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    var target = document.getElementById("Sponsors");
    observer.observe(target);
  }

  render() {
    var items = [
      {
        children: (
          <div id="Sponsors">
            <h1 className="Sponsor-head">Sponsors</h1>
            <h2 className="Sponsor-head">Title Sponsor</h2>
            <div id="title-sponsors-logo">
              <div>
                <a href="https://www.prepbytes.com/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/PrepBytes Logo.png"/>
                </a>
              </div>
            </div>
			<h2 className="Sponsor-head">Giga Sponsor</h2>
            <div id="giga-sponsors-logo">
              <div>
                <a href="https://devfolio.co/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/Devfolio_Logo-Colored.png"/>
                </a>
              </div>
            </div>
			<h3 className="Sponsor-head">Mega Sponsor</h3>
            <div id="sponsors-logo">
              <div>
                <a href="https://matic.network/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/Matic_Logo-Blue.png" />
                </a>
              </div>
			  <div>
                <a href="https://www.portis.io/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/Portis_Logo-Colored_Black.png" />
                </a>
              </div>
			  <div>
                <a href="https://tezos.com/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/Tezos_Logo-Colored.png" />
                </a>
              </div>
			  <div>
                <a href="https://www.datacamp.com/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/datacamp.png" />
                </a>
              </div>
            </div>
			<h3 className="Sponsor-head">Industrial Training & Live Project Partner</h3>
            <div id="sponsors-logo">
              <div>
                <a href="https://www.inmovidutech.com/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/inmovidu.png" />
                </a>
              </div>
            </div>
			<h3 className="Sponsor-head">Benefactor</h3>
            <div id="sponsors-logo">
              <div>
                <a href="https://www.sketch.com/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/sketch-1.svg" />
                </a>
              </div>
			  <div>
                <a href="https://www.axure.com/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/Axure_logo_400.svg" />
                </a>
              </div>
			  <div>
                <a href="https://www.wolframalpha.com/" target="_blank">
                  <img className="sponsor-img" src="images/Sponsors/Wolfram.png"/>
                </a>
              </div>
            </div>
          </div>
        ),
      },
	  // {
    //     children: (
    //       <div id="Sponsors">
    //         <h1 className="Sponsor-head">Past Sponsors</h1>
    //         <div id="sponsors-logo">
    //           <div>
    //             <a href="https://mic.gov.in/mic/innovation-council/www.ieeeup.org/" target="_blank">
    //               <img className="sponsor-img" src="images/IIC.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.bankofbaroda.in/" target="_blank">
    //               <img className="sponsor-img" src="images/bank.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.ieeeup.org/" target="_blank">
    //               <img className="sponsor-img" src="images/ieee_up.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://codechef.com" target="_blank">
    //               <img className="sponsor-img" src="images/codechef_logo.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://devfolio.co/" target="_blank">
    //               <img className="sponsor-img" src="images/devfolio.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://matic.network/" target="_blank">
    //               <img className="sponsor-img" src="images/matic.svg" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.jetbrains.com" target="_blank">
    //               <img className="sponsor-img" src="images/jetbrains.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.hackerearth.com" target="_blank">
    //               <img className="sponsor-img" src="images/hackerearth.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://axure.com" target="_blank">
    //               <img className="sponsor-img" src="images/axure.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://dare2compete.com" target="_blank">
    //               <img className="sponsor-img" src="images/dare2compete.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://codingblocks.com" target="_blank">
    //               <img className="sponsor-img" src="images/codingblocks.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://hackr.io/hackr-plus" target="_blank">
    //               <img className="sponsor-img" src="images/hackr_io.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.codingninjas.com" target="_blank">
    //               <img className="sponsor-img" src="images/codingninjas.svg" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://fold.money" target="_blank">
    //               <img className="sponsor-img" src="images/fold.svg" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.wolfram.com" target="_blank">
    //               <img className="sponsor-img" src="images/Wolfram.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.thesouledstore.com" target="_blank">
    //               <img
    //                 className="sponsor-img"
    //                 src="images/the_souled_store.png"
    //               />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.bugsee.com" target="_blank">
    //               <img className="sponsor-img" src="images/bugsee.svg" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://balsamiq.com" target="_blank">
    //               <img className="sponsor-img" src="images/balsamiq_logo.svg" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://cloudsploit.com" target="_blank">
    //               <img className="sponsor-img" src="images/cloud.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://creative-tim.com" target="_blank">
    //               <img className="sponsor-img" src="images/CreativeTim.png" />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://interviewcake.com" target="_blank">
    //               <img
    //                 className="sponsor-img"
    //                 src="images/interview_cake.png"
    //               />
    //             </a>
    //           </div>
    //           <div>
    //             <a href="https://www.digitalocean.com" target="_blank">
    //               <img
    //                 className="sponsor-img"
    //                 src="images/DO_Logo_horizontal_blue.svg"
    //               />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     ),
    //   },
    ];
    return (
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }
}

function Item(props) {
  return (
    <Paper style={{ background: "transparent" }}>{props.item.children}</Paper>
  );
}

export default Sponsor;
