import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../../api/toast";
import "./Navbar.css";

// .Navbuttons a {
//   margin: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #4f55c4;
//   padding: 10px;
//   padding-top: 0;
//   font-weight: bold;
//   font-size: 15px;
// }


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
        <img
          className="navbarimg"
          style={{ width: "200px", marginLeft: "20px" }}
          src="https://cdn.discordapp.com/attachments/1063578363505152081/1084705078012813372/settleoutLogo.png"
          alt="Logo"
        />
      </div>
      <div>
        <ul className="Navbuttons" style={{ display: "flex" }}>
          {user && (
            <>
              {user.accountType === "public" && (
                <a href="/upgrade">Become an Agent</a>
              )}
              <a href="/aboutus">About Us</a>
              {/* <a href="">
                Contact Us
              </a> */}
              <a href="" onClick={handleLogout}>
                Logout
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
