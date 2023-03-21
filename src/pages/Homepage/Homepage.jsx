import React from "react";
import "./Homepage.css";
import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

function Homepage({ featured = false, children = null }) {
  return (
    <>
      <Navbar />
      <div className="sect sect--padding-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="site">
                <h1 className="site__title">Welcome to Regina!</h1>
                <h2 className="site__subtitle">
                  We understand that settling into a new city is a daunting
                  task, which is why we offer a range of packages to assist you
                  with essential services upon your arrival.
                </h2>
                <h2 className="site__subtitle">
                  Our dedicated agents are here to help you navigate your way
                  through this exciting new chapter of your life.{" "}
                </h2>
                <div className="site__box-link">
                  <a className="btn btn--width" href="/agent-list">
                    Choose an Agent
                  </a>
                  <a className="btn btn--revert btn--width" href="/contactus">
                    Contact
                  </a>
                </div>
                <img
                  className="site__img"
                  alt="edu_settleout"
                  src="https://media.discordapp.net/attachments/1063577425549725762/1078126567496101929/ArtsCareerConversations_LandingaJob.jpg"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sect sect--violet ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="career_title">
                Ah, I see you've taken the time to explore our website in search
                of a new job opportunity.
              </h1>
              <h1 className="career_sub">
                We will be pleased to have you onboard!
              </h1>
              <h2 className="career_sub">Apply to become an agent now.</h2>
              <a href="/Upgrade" className="btn btn--white btn--width">
                Become An Agent
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
