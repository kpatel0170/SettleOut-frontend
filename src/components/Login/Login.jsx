import React, { useState, useEffect, useContext } from "react";
import "./Login.css"
import commonApi from "../../api/common";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import Toast from "../../api/toast";
import "react-notifications-component/dist/theme.css";


function Login() {
  const { dispatch } = useContext(Context);
 const navigate = useNavigate();
  // Use the useState hook to create state variables for the form fields and errors
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    setErrors({});

    const newErrors = {};

    if (username.trim().length === 0) {
      newErrors.username = "Username is required";
    }
    if (password.trim().length === 0) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      await commonApi({
        action: "login",
        data: {
          email: username,
          password: password,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          let { token, ...data } = DATA;
          console.log(token + "-token");
          dispatch({ type: "LOGIN_SUCCESS", payload: data, token: token });
          Toast.success(MESSAGE);
          navigate("/");
        })
        .catch((error) => {
          dispatch({ type: "LOGIN_FAILURE" });
          setErrors({
            username: "Username is incorrect",
            password: "Password is incorrect",
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
              If not a member? <a href="/signup">Sign Up</a>
            </p>
            <form onSubmit={handleSubmit} className="login-form">

            <label htmlFor="username" className="login-label">
              Email:
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
