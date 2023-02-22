
import React from 'react';
// import Logo from "../assets/Globalblac.png";
import "./PreArrival.css"

const PreArrival = () => {
  return (
    <div class="login-box">
  <h2>Pre-Arrival Form</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>INRA Number:</label>
    </div>
    <div class="user-box">
      <input type="date" name="" required="" />
      <label>Arrival Date</label>
    </div>
    <div class="user-box">
      <input type="time" name="" required="" />
      <label>Arrival Time</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>City:</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Provience:</label>
    </div>
    <a href="#">
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

