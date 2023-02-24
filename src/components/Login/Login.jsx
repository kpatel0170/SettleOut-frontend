import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
//import Navbar from "../Navbar";
import commonApi from "../../api/common";
import { Context } from "../context/Context";
import { useNavigate } from "react-router";
function Login() {
  const { dispatch } = useContext(Context);
 const navigate = useNavigate();
  // Use the useState hook to create state variables for the form fields and errors
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Create a function to validate the form
  const validateForm = () => {
    // Set the errors object to an empty object
    setErrors({});

    // Create a new errors object that will be used to update the errors state variable
    const newErrors = {};

    // Validate the username and password fields
    if (username.trim().length === 0) {
      newErrors.username = "Username is required";
    }
    if (password.trim().length === 0) {
      newErrors.password = "Password is required";
    }

    // Set the errors state variable to the new errors object
    setErrors(newErrors);

    // Return true if the errors object is empty, false if it is not
    return Object.keys(newErrors).length === 0;
  };

  // Create a function to handle form submissions
  const handleSubmit = async (event) => {
    // Prevent the form from refreshing the page
    event.preventDefault();

    // Validate the form
    const isValid = validateForm();

    // If the form is valid, submit the form
    if (isValid) {
      // Add code here to submit the form
      await commonApi({
        action: "login",
        data: {
          email: username,
          password: password,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          let { token, ...data } = DATA;
          dispatch({ type: "LOGIN_SUCCESS", payload: data, token: token });
          navigate("/");
        })
        .catch((error) => {
          dispatch({ type: "LOGIN_FAILURE" });
          setErrors({
            username: "Username or password is not correct",
            password: "Username or password is not correct",
          });
          console.error(error);
        });
    }
  };

  // Render the Login form
  return (
    <>
        <div className="container">
          <main className="login-container">
            <h1>
              {" "}
              To Access Service LOGIN<span className="custom-dot">.</span>
            </h1>
            <p className="text-mute">
              If not a member? <a href="$">Sign Up</a>
            </p>
            <form onSubmit={handleSubmit} className="login-form">

            <label htmlFor="username" className="login-label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className={`login-input ${errors.username ? "input-error" : ""}`}
            />
            <div
              className={`error-message ${errors.username ? "visible" : "hidden"}`}
            >
              {errors.username}
            </div>
            <label htmlFor="password" className="login-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={`login-input ${errors.password ? "input-error" : ""}`}
            />
            <div
              className={`error-message ${errors.password ? "visible" : "hidden"
              }`}
            >
              {errors.password}
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            
      </form>
          </main>
  
      <div className="welcome-container">
    <h1 className="heading-secondary">Welcome to <span className="lg">SettleOUT! <br></br></span>
    <span> Your One Stop Navigator for Your New Life In Regina</span> </h1>
    <br></br>
   
  </div>
  </div>
    </>

  );
};

export default Login;
