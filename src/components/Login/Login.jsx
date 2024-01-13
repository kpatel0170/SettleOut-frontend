import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context/Context";
import commonApi from "../../api/common";
import Toast from "../../api/toast";

function Login() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
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

    if (validateForm()) {
      try {
        const { DATA = {}, MESSAGE } = await commonApi({
          action: "login",
          data: {
            email: email,
            password: password
          }
        });

        let { token, ...data } = DATA;
        dispatch({ type: "LOGIN_SUCCESS", payload: data, token: token });
        Toast.success(MESSAGE);
        navigate("/");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" });

        if (
          error.response &&
          error.response.data &&
          error.response.data.DATA === "email"
        ) {
          setErrors({ email: error.response.data.MESSAGE });
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
            Sign in to your account
          </h3>
          <p className="text-gray-500">
            Login for a faster checkout experience.
          </p>
        </div>

        <hr className="my-4 border-t border-gray-300" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
              className={`w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="text-right">
            <a
              href="#0"
              className="text-sm font-medium text-primary hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button className="w-full flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90">
            Sign in
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
}

export default Login;
