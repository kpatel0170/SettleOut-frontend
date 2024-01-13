import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context/Context";
import commonApi from "../../api/common";
import Toast from "../../api/toast";

const Signup = () => {
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
      newErrors.firstName = "First Name is required";
    }
    if (lastName.length === 0) {
      newErrors.lastName = "Last Name is required";
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
      try {
        const { DATA = {}, MESSAGE } = await commonApi({
          action: "register",
          data: {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: {
              phone: phone
            },
            password: password
          }
        });

        let { token, ...data } = DATA;
        dispatch({ type: "LOGIN_SUCCESS", payload: data, token: token });
        Toast.success(MESSAGE);
        navigate("/");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" });

        if (error.response && error.response.data && error.response.data.DATA) {
          if (error.response.data.DATA === "email") {
            setErrors({ email: error.response.data.MESSAGE });
          }
        }

        console.error(error);
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-md shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-800">
            Create a New Account
          </h3>
          <p className="text-gray-500">
            Already a Member?{" "}
            <a href="/login" className="text-primary hover:underline">
              Log in
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm text-gray-600 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm text-gray-600 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm text-gray-600 mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={phone}
              maxLength={10}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-gray-600 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button className="w-full flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90">
            Sign Up
          </button>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already a Member?{" "}
            <a href="/login" className="text-primary hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
