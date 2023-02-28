import React from "react";
import "./UserDetail.css"
function UserDetail ()  {
    return (
      <>
      
   <div className="container">
  <main className="container">
    {/* <h1 className="heading-primary">Edit your information here<span className="custom-dot">.</span></h1> */}
    <form className="signup-form">
      <img className="i" img src="https://cdn.discordapp.com/attachments/1072226973365051522/1078135428781195294/person-icon-1675.png"></img>
      <div className="f-row input-wrapper">
        <label className="inp">
          <input type="text" className="input-text" placeholder="&nbsp;"></input>
          <span className="label">First name</span>
          <span className="input-icon"><i className="fa-solid fa-address-card"></i></span>
        </label>
        <label className="inp">
          <input type="text" className="input-text" placeholder="&nbsp;"></input>
          <span className="label">Last name</span>
          <span className="input-icon"><i className="fa-solid fa-address-card"></i></span>
        </label>
      </div>
      <div className="f-row input-wrapper">
      <label className="inp">
        <input type="email" className="input-text" placeholder="&nbsp;"></input>
        <span className="label">Email</span>
        <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
      </label>
      <label className="inp">
        <input type="email" className="input-text" placeholder="&nbsp;"></input>
        <span className="label">Street</span>
        <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
      </label>
      </div>
      <div className="f-row input-wrapper">
      <label className="inp">
        <input type="email" className="input-text" placeholder="&nbsp;"></input>
        <span className="label">city</span>
        <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
      </label>
      <label className="inp">
        <input type="email" className="input-text" placeholder="&nbsp;"></input>
        <span className="label">Province</span>
        <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
      </label>

      </div>

      <div className="f-row input-wrapper">
      <label className="inp">
        <input type="email" className="input-text" placeholder="&nbsp;"></input>
        <span className="label">Country</span>
        <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
      </label>
      <label className="inp">
        <input type="email" className="input-text" placeholder="&nbsp;"></input>
        <span className="label">Postal Code</span>
        <span className="input-icon"><i className="fa-solid fa-envelope"></i></span>
      </label>

      </div>
      <div className="f-row input-wrapper">
      <label className="inp">
        <input type="password" className="input-text" placeholder="&nbsp;" id="password"></input>
        <span className="label">Password</span>
        <span className="input-icon input-icon-password" data-password><i className="fa-solid fa-eye"></i></span>
      </label>
      <label className="inp">
        <input type="password" className="input-text" placeholder="&nbsp;" id="password"></input>
        <span className="label">Cell phone</span>
        <span className="input-icon input-icon-password" data-password><i className="fa-solid fa-eye"></i></span>
      </label>
      </div>
      <button className="btn btn-signup">Save</button>
      <button className="btn btn-signup">Cancel</button>
    </form>
  </main>
</div>
  
    </>
    );
    }
    export default UserDetail;