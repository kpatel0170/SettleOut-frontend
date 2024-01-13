import React from 'react';
import './FeedbackForm.css';
import { useNavigate } from "react-router";
import Toast from "../../api/toast";

function FeedbackForm  ({ featured = false, children = null }){
    const navigate = useNavigate();
    
    const handleSubmit = async (event) =>{
        Toast.success("Thanks for your feedback!");
        navigate("/");
    }
    return (
    <>
    <div className="wrapper">
        <h2>Feedback Form</h2>
        <div id="error_message"></div>
        <form id="myform" onSubmit={handleSubmit} >
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
            <div className="btn-feedback">
                <button type="submit" style={{color: "white"}}>Submit</button>
            </div>
        </form>
    </div>
    </>
)
}

export default FeedbackForm;