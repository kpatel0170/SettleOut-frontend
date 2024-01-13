import React, { useState, useEffect, useContext } from "react";
import "./Login.css";
import commonApi from "../../api/common";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import Toast from "../../api/toast";
import "react-notifications-component/dist/theme.css";

function Login() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  // Use the useState hook to create state variables for the form fields and errors
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    setErrors({});

    const newErrors = {};

    if (email.trim().length === 0) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (password.trim().length === 0) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateForm();

    if (Object.keys(errors).length === 0) {
      await commonApi({
        action: "login",
        data: {
          email: email,
          password: password,
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
          let { token, ...data } = DATA;
          dispatch({ type: "LOGIN_SUCCESS", payload: data, token: token });
          Toast.success(MESSAGE);
          navigate("/");
        })
        .catch((error) => {
          dispatch({ type: "LOGIN_FAILURE" });
          if (
            error.response &&
            error.response.data &&
            error.response.data.DATA
          ) {
            if (error.response.data.DATA === "email") {
              setErrors({ email: error.response.data.MESSAGE });
            }
          }
          console.error(error);
        });
    }
  };

  // Render the Login form
  return (
    <>
      <div className="container">
        <main className="login-container">
          <div className="heading-signup">
          Login to access your Account <span className="custom-dot">.</span>
          </div>
          <p className="text-mute">
            Not a Member? <a href="/signup">Sign Up</a>
          </p>
          <form onSubmit={handleSubmit} className="login-form">
            <label htmlFor="email" className="login-label">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => setUsername(event.target.value)}
              className={`login-input ${errors.username ? "input-error" : ""}`}
            />
            <div
              className={`error-message ${
                errors.username ? "visible" : "hidden"
              }`}
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
              className={`error-message ${
                errors.password ? "visible" : "hidden"
              }`}
            >
              {errors.password}
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
            <br />
            <p className="text-mute">
              Not a member? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </main>

        <div className="welcome-container">
          <h1 className="heading-secondary">
            Welcome to{" "}
            <span className="lg">
              SettleOut! <br></br>
            </span>
            <span> One Stop Navigator for Settling in Regina.</span>{" "}
          </h1>
          <br></br>
        </div>
      </div>
    </>
  );
}

export default Login;
