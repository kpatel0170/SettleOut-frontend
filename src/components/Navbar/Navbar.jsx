import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../../api/toast";
// import Logo from "../assets/Globalblac.png";
import "./Navbar.css";

const Navbar = () => {
  const { user, dispatch, token } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const handleLogout = async () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    Toast.success("You have been successfully logged out");
    navigate("/login");
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {/* <img className='navbarimg' style={{height: "15q0px"}} src={Logo} alt="Logo" />             */}
      </div>
      <div>
        <ul className="Navbuttons" style={{ display: "flex" }}>
          {user && (
            <>
              {user.accountType === "public" && (
                <a href="/Upgrade">Upgrade to agent</a>
              )}
              <a href="/About">About Us</a>
              {/* <a href="">
                Contact Us
              </a> */}
              <a href="" onClick={handleLogout}>
                LogOut
              </a>
            </>
          )}
          {!user && !token && pathName != "/signup" && (
            <a href="/signup">Sign Up</a>
          )}
          {!user && !token && pathName != "/login" && (
            <a href="/login">Login</a>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
