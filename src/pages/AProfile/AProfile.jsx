import React from "react";
import { useLocation } from "react-router-dom";

const AProfile = () => {
  const { state } = useLocation();
  const agent = state.user;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Agent Profile</h1>
      </div>
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Name: {agent.firstName} {agent.lastName}
        </h2>
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2 text-gray-700">About:</h2>
          <p className="text-xl text-gray-800">{agent.bio}</p>
        </div>
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2 text-gray-700">
            Home Country:
          </h2>
          <p className="text-xl text-gray-800">{agent.homeCountry}</p>
        </div>
        <p className="text-xl font-semibold mb-4 text-gray-700">
          Verified:{" "}
          <span className="font-bold text-green-500">
            {agent.isPhoneVerified ? "Yes" : "No"}
          </span>
        </p>
        <div className="mb-4">
          <h2 className="font-semibold text-xl mb-2 text-gray-700">
            Education:
          </h2>
          <p className="text-xl text-gray-800">
            Major: {agent.major}, Year: {agent.year}
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-2 text-gray-700">Rating:</h2>
          <p className="text-xl">
            <span className="font-bold text-yellow-500">{agent.ratings}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AProfile;
