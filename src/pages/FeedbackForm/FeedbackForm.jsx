import React from 'react';
import './FeedbackForm.css';

function FeedbackForm  ({ featured = false, children = null }){return (
    <>
    <div className="wrapper">
  <h2>Feedback Form</h2>
  <div id="error_message"></div>
  <form id="myform" onsubmit="return validate();">
    <div className="input_field">
        <input type="text" placeholder="First Name" id="fname"></input>
    </div>
    <div className="input_field">
        <input type="text" placeholder="Last Name" id="lname"></input>
    </div>
    <div className="input_field">
        <input type="text" placeholder="Phone" id="phone"></input>
    </div>
    <div className="input_field">
        <input type="text" placeholder="Email" id="email"></input>
    </div>
    <div className="input_field">
        <textarea placeholder="Your Feedback" id="yourfeedback"></textarea>
    </div>
    <div className="btn">
        <input type="submit"></input>
    </div>
  </form>
</div>



    </>
)
}

export default FeedbackForm;