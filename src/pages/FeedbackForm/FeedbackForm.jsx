import React from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../../api/toast";

const FeedbackForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    Toast.success("Thanks for your feedback!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-slate-500 dark:text-gray-300 p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="First Name"
              id="fname"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Last Name"
              id="lname"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              id="email"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Feedback"
              id="yourfeedback"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
