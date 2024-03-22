import React, { useState } from "react";
import { useNavigate } from "react-router";
// import commonApi from "../../api/common";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    setErrors({});
    const newErrors = {};

    if (email.trim().length === 0) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = "Invalid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        // You can add API call to handle forgot password logic here
        // For example:
        // await commonApi({
        //   action: "forgotPassword",
        //   data: {
        //     email: email,
        //   },
        // });

        // For this example, let's just navigate to a confirmation page
        navigate("/forgot-password-confirmation");
      } catch (error) {
        console.error(error);
        // Handle error, show a message, or redirect to an error page
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center dark:bg-gray-800">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 p-8 rounded-md shadow-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
            Forgot Password
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Enter your email to reset your password.
          </p>
        </div>

        <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />

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
              className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-600 outline-none focus:border-primary transition-colors ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <button className="w-full flex items-center justify-center rounded-md bg-black dark:bg-primary px-6 py-3 text-sm font-medium text-white dark:text-white duration-300 hover:bg-primary/90">
            Reset Password
          </button>
        </form>

        <p className="text-center mt-4 text-xs text-gray-600 dark:text-gray-400">
          Remember your password?{" "}
          <a href="/login" className="text-primary hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </section>
  );
}

export default ForgotPassword;
