import React, { useState, useContext, useEffect } from "react";
import "./Signup.css";
import { Context } from "../../context/Context";
import { useNavigate } from "react-router";
import commonApi from "../../api/common";
import Toast from "../../api/toast";

const Signup = () => {
  // Use the useState hook to create "username", "email", "password", and "confirmPassword" state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    setErrors({});

    const newErrors = {};

    if (firstName.length === 0) {
      newErrors.firstName = "FirstName is required";
    }
    if (lastName.length === 0) {
      newErrors.lastName = "LastName is required";
    }
    if (phone.length === 0) {
      newErrors.phone = "Phone is required";
    }
    if (email.trim().length === 0) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (password.trim().length === 0) {
      newErrors.password = "Password is required";
    } else if (password.trim().length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    if (confirmPassword.trim().length === 0) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateForm();

    if (Object.keys(errors).length === 0) {
      await commonApi({
        action: "register",
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: {
            phone: phone,
          },
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

  return (
    <>
      <div className="container">
        <main className="signup-container">
          <div className="heading-signup">
            Create A New Account<span className="custom-dot">.</span>
          </div>
          <p className="text-mute">
            Already A Member? <a href="/login">Log in</a>
          </p>
          <form onSubmit={handleSubmit} className="signup-form">
            <label htmlFor="firstName" className="signup-label">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="signup-input"
            />
            {errors.firstName && (
              <div className="signup-error">{errors.firstName}</div>
            )}

            <label htmlFor="lastName" className="signup-label">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="signup-input"
            />
            {errors.lastName && (
              <div className="signup-error">{errors.lastName}</div>
            )}
            <label htmlFor="email" className="signup-label">
              email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="signup-input"
            />
            {errors.email && <div className="signup-error">{errors.email}</div>}

            <label htmlFor="phone" className="signup-label">
              Phone Number:
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              maxLength={10}
              onChange={(event) => setPhone(event.target.value)}
              className="signup-input"
            />
            {errors.phone && <div className="signup-error">{errors.phone}</div>}

            <label htmlFor="password" className="signup-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="signup-input"
            />
            {errors.password && (
              <div className="signup-error">{errors.password}</div>
            )}
            <label htmlFor="confirmPassword" className="signup-label">
              Confirm Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="signup-input"
            />
            {errors.confirmPassword && (
              <div className="signup-error">{errors.confirmPassword}</div>
            )}
            <button type="submit" className="signup-button">
              Sign Up
            </button>
            <br />

            <p className="text-mute">
              Already A Member? <a href="/login">Log in</a>
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
};

export default Signup;
