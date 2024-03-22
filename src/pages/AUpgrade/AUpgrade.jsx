import React from "react";
// import "./Upgrade.css";
import { useNavigate } from "react-router";
import Toast from "../../api/toast";

const AUpgrade = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    Toast.success(
      "We have received your application. We will get back to you soon!"
    );
    navigate("/");
  };

  return (
    <div className="min-h-screen flex py-6 items-center justify-center">
      <div className="p-8 rounded-md shadow-md max-w-md w-full bg-slate-400">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Apply to Become an Agent
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="why" className="block text-gray-700 font-bold mb-2">
              Why do you want to become an agent?
            </label>
            <textarea
              type="text"
              name="why"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary resize-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">
              Enter your bio for your profile:
            </label>
            <textarea
              type="text"
              name="bio"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary resize-none"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 font-bold mb-2"
            >
              City:
            </label>
            <input
              type="text"
              name="city"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="province"
              className="block text-gray-700 font-bold mb-2"
            >
              Province:
            </label>
            <input
              type="text"
              name="province"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AUpgrade;
