
import React from 'react';
// import Logo from "../assets/Globalblac.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
        <div>
            {/* <img style={{height: "15q0px"}} src={Logo} alt="Logo" />             */}
        </div>
        <div>
            <ul style={{display: "flex"}}>
            <a href="/Upgrade">Apply to be agent</a>
            <a href="#">About Us</a>
            <a href="/dashboard">Contact Us</a>
                <a href="/signup">Sign Up</a>
                </ul>
        </div>
    </div>
      );
    };

    export default Navbar;

