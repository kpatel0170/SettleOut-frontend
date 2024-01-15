import React from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../../api/toast";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    Toast.success("We will get back to you ASAP!");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              id="name"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary"
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Your Message"
              id="message"
              className="w-full px-4 py-2 border rounded-md bg-gray-50 outline-none focus:border-primary resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
