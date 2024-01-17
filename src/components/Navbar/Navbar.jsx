import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import Toast from "../../api/toast";
import ThemeToggler from "./ThemeToggler";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, dispatch, token } = useContext(Context);
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  const handleLogout = async () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    Toast.success("You have been successfully logged out");
    navigate("/login");
  };

  return (
    <div className="antialiased bg-gray-100 dark:bg-gray-900">
      <div className="w-full text-gray-700 bg-white dark:text-gray-200 dark:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between p-4">
            <a
              href="/"
              className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
            >
              SettleOut
            </a>

            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black dark:bg-white transition-all duration-300 ${
                  isOpen ? " top-[7px] rotate-45" : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black dark:bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0 " : " "
                }`}
              />
              <span
                className={`relative my-1.5 block h-0.5 w-[30px] bg-black dark:bg-white transition-all duration-300 ${
                  isOpen ? " top-[-8px] -rotate-45" : " "
                }`}
              />
            </button>
          </div>

          <nav
            className={`flex-col flex-grow md:flex md:justify-end md:flex-row items-center justify-center ${isOpen ? "flex" : "hidden"}`}
          >
            <ul className="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row space-x-4">
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
                    <button
                      onClick={handleLogout}
                      className="hover:text-gray-300 focus:outline-none"
                    >
                      Logout
                    </button>
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
          </nav>
          <div className="flex items-center justify-center py-2 md:py-0">
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
