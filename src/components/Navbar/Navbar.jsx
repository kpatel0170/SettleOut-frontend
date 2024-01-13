import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../../api/toast";

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
    <div className="bg-gray-200 font-bold p-4">
      <div className="flex items-center justify-between">
        <img
          className="h-8"
          src="https://cdn.discordapp.com/attachments/1063578363505152081/1084705078012813372/settleoutLogo.png"
          alt="Logo"
        />
        <ul className="flex space-x-4">
          {user && (
            <>
              {user.accountType === "public" && (
                <li>
                  <a href="/upgrade" className="hover:text-gray-300">
                    Become an Agent
                  </a>
                </li>
              )}
              <li>
                <a href="/aboutus" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              {/* Uncomment the line below if you have a Contact Us page */}
              {/* <li><a href="/contactus" className="hover:text-gray-300">Contact Us</a></li> */}
              <li>
                <a
                  href="#"
                  onClick={handleLogout}
                  className="hover:text-gray-300"
                >
                  Logout
                </a>
              </li>
            </>
          )}
          {!user && !token && pathName !== "/signup" && (
            <li>
              <a href="/signup" className="hover:text-gray-300">
                Sign Up
              </a>
            </li>
          )}
          {!user && !token && pathName !== "/login" && (
            <li>
              <a href="/login" className="hover:text-gray-300">
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
