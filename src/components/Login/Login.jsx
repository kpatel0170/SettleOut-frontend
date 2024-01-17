import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../../context/Context";
import commonApi from "../../api/common";
import Toast from "../../api/toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

function Login() {
  const { dispatch } = useContext(Context);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <section className="min-h-screen flex items-center justify-center dark:bg-gray-800">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-md shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Sign in to your account
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Login for a faster checkout experience.
          </p>
        </div>

        <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-600 dark:text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-600 outline-none focus:border-primary transition-colors ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative mt-4">
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 dark:text-gray-400 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-600 outline-none focus:border-primary transition-colors ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-6 w-6 text-gray-500" />
                ) : (
                  <FaEye className="h-6 w-6 text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="text-right">
            <a
              href="/forgotpassword"
              className="text-xs font-medium text-primary dark:text-gray-400 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button className="w-full flex items-center justify-center rounded-md bg-black dark:bg-primary px-6 py-3 text-sm font-medium text-white dark:text-white duration-300 hover:bg-primary/90">
            Sign in
          </button>
        </form>

        <p className="text-center mt-4 text-xs text-gray-600 dark:text-gray-400">
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
