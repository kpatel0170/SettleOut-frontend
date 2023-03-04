
import React, { useState, useContext } from "react";
// import Logo from "../assets/Globalblac.png";
import "./PreArrival.css"
import "../../components/Signup/Signup.css";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import commonApi from "../../api/common";


const PreArrival = () => {
  // Use the useState hook to create "username", "email", "password", and "confirmPassword" state variables

  const [Ticket, setTicket] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const { dispatch, user } = useContext(Context);
  const navigate = useNavigate();
  // Use the useState hook to create an error state variable, which will be used to display any form validation errors
  const [errors, setErrors] = useState({});

  // Create a function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    await commonApi({
      action: "updateProfile",
      data: {
        userId: user._id,
        demographics: {
          city,
          province,
          ticket: Ticket,
          arrivalDate: date,
          arrivalTime: time,
        },
      },
    })
      .then(({ DATA = {}, MESSAGE }) => {
        navigate("/Success");
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div className="login-box">
  <h2>Pre-Arrival Form</h2>
  <form onSubmit={handleSubmit}> 
    <div className="user-box">
      <input type="text" name="Ticket"
          value={Ticket}
          onChange={(event) => setTicket(event.target.value)} required="" />
      <label>INRA Number:</label>
      {errors.Ticket && <div className="signup-error">{errors.Ticket}</div>}
    </div>
    <div className="user-box">
      <input type="date" name="date"
          value={date}
          onChange={(event) => setdate(event.target.value)} required="" />
      <label>Arrival Date</label>
      {errors.date && <div className="signup-error">{errors.date}</div>}
    </div>
    <div className="user-box">
      <input type="time" name="time"
          value={time}
          onChange={(event) => settime(event.target.value)} required="" />
      <label>Arrival Time</label>
      {errors.time && <div className="signup-error">{errors.time}</div>}
    </div>
    <div className="user-box">
      <input type="text" name="city"
          value={city}
          onChange={(event) => setCity(event.target.value)} required="" />
      <label>City:</label>
      {errors.city && <div className="signup-error">{errors.city}</div>}
    </div>
    <div className="user-box">
      <input type="text" name="province"
          value={province}
          onChange={(event) => setProvince(event.target.value)} required="" />
      <label>Provience:</label>
      {errors.province && (
          <div className="signup-error">{errors.province}</div>
        )}
    </div>
    
    <a href="/" type="submit" className="signup-button">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  
  </form>
</div>
      );
    };

    export default PreArrival;

