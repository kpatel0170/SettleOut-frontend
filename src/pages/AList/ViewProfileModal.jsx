import React from "react";

const ViewProfileModal = ({ agent, onClose }) => {
  const handleClose = (e) => {
    // Prevent clicks on the modal content from closing the modal
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={handleClose}
      ></div>
      <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-lg z-10">
        <div className="text-4xl text-gray-900 font-medium mb-4">
          {agent.fullName}
        </div>
        <div className="max-w-2xl mx-auto mt-4 p-4 bg-white rounded-lg shadow-md">
          <div className="font-semibold text-xl mb-2 text-gray-700">
            About: <span className="text-base text-gray-800">{agent.bio}</span>
          </div>
          <div className="font-semibold text-xl mb-2 text-gray-700">
            Home Country:{" "}
            <span className="text-base text-gray-800">{agent.homeCountry}</span>
          </div>
          <div className="text-xl font-semibold mb-2 text-gray-700">
            Verified:{" "}
            <span
              className={`font-bold ${agent.isPhoneVerified ? "text-green-500" : "text-red-500"}`}
            >
              {agent.isPhoneVerified ? "Yes" : "No"}
            </span>
          </div>
          <div className="font-semibold text-xl mb-2 text-gray-700">
            Education:{" "}
            <span className="text-gray-800">
              Major: {agent.major}, Year: {agent.year}
            </span>
          </div>
          <div className="font-semibold text-xl mb-2 text-gray-700">
            Rating:{" "}
            <span className="font-bold text-yellow-500">{agent.ratings}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewProfileModal;
