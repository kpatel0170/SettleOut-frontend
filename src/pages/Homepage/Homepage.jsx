import React from 'react';
import "./Homepage.css"
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";


function Homepage  ({ featured = false, children = null }){return (
<>
<Navbar />
<div className="sect sect--padding-top">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
    <div className="site">
      <h1 className="site__title">One stop assitance to all your necessities after you land in Regina</h1>
      <h2 className="site__subtitle">Once you land in Regina you would need assistance to find apartment, settle down here, grocery shopping in the first day, and other services. 
      <span> If you select an Agent from below you will be able to find different packages we offer as service and the prices. </span> </h2>
      <div className="site__box-link">
        <a className="btn btn--width" href="/agent-list">Choose an Agent</a>
        <a className="btn btn--revert btn--width" href="/contact-us">Contact</a>
      </div>
      <img className="site__img" src="https://media.discordapp.net/attachments/1063577425549725762/1078126567496101929/ArtsCareerConversations_LandingaJob.jpg"></img>
    </div>
    </div>
    </div>
  </div>
</div>






<div className="sect sect--violet ">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="career_title">Oh! Your have digged our website in search for the new job?</h1>
        <h1 className="career_sub">We will pleased to have you onboard! Check open positions.</h1>
        <a href="/Upgrade" className="btn btn--white btn--width">Become An Agent</a>
      </div>
    </div>
  </div>
  
</div>
<Footer />
</>

);
}

export default Homepage;