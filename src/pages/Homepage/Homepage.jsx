import React from 'react';
import "./Homepage.css"



function Homepage  ({ featured = false, children = null }){return (
<>
<div class="sect sect--padding-top">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
    <div class="site">
      <h1 class="site__title">One stop assitance to all your necessities after you land in Regina</h1>
      <h2 class="site__subtitle">Once you land in Regina you would need assistance to find apartment, settle down here, grocery shopping in the first day, and other services. 
      <span> If you select an Agent from below you will be able to find different packages we offer as service and the prices. </span> </h2>
      <div class="site__box-link">
        <a class="btn btn--width" href="/Pricing">Choose an Agent</a>
        <a class="btn btn--revert btn--width" href="/Contact">Contact</a>
      </div>
      <img class="site__img" src="https://www.arts.ubc.ca/wp-content/uploads/sites/24/2022/11/ArtsCareerConversations_LandingaJob.jpg"></img>
    </div>
    </div>
    </div>
  </div>
</div>






<div class="sect sect--violet ">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1 class="career_title">Oh! Your have digged our website in search for the new job?</h1>
        <h1 class="career_sub">We will pleased to have you onboard! Check open positions.</h1>
        <a href="#/Agent" class="btn btn--white btn--width">Become An Agent</a>
      </div>
    </div>
  </div>
  
</div>

</>

);
}

export default Homepage;