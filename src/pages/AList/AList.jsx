import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import commonApi from "../../api/common";
import { useNavigate } from "react-router-dom";
import AProfile from "./ViewProfileModal";

const AList = () => {
  const [agentList, setAgentList] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null); // To track the selected agent
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      await commonApi({
        action: "agentList",
        data: {
          query: {
            accountType: "agent"
          }
        }
      })
        .then(({ DATA = {}, MESSAGE }) => {
          setAgentList(DATA.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    list();
  }, []);
  const handleSelectAgent = (id) => {
    navigate("/membership", { state: { agentId: id } });
  };

  const handleViewProfile = (agent) => {
    setSelectedAgent(agent);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAgent(null);
  };

  return (
    <>
      <div className="grid grid-rows pl-9 pr-9 ml-5 mr-5 pt-10 bg-gray-300">
        {agentList.map((agent) => (
          <div
            key={agent.id}
            className="bg-white shadow-md rounded-lg p-6 mb-7"
          >
            <div className="text-4xl text-gray-900 font-medium mb-2">
              {agent.fullName}
            </div>
            <p className="text-gray-600 mt-4 text-2xl">
              Origin: {agent.homeCountry}
            </p>
            <div className="flex justify-between mt-0">
              <div className="flex items-center">
                <span className="text-2xl text-gray-600">Rating:</span>
                <span className="text-2xl font-bold ml-1 text-yellow-400">
                  {agent.ratings}
                </span>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleViewProfile(agent)}
                  className="bg-gray-500 text-white px-3 py-2 rounded"
                >
                  View Profile
                </button>
                <button
                  onClick={() => handleSelectAgent(agent._id)}
                  className="bg-blue-500 text-white px-3 py-2 rounded"
                >
                  Select Agent
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && <AProfile agent={selectedAgent} onClose={closeModal} />}
    </>
  );
};

export default AList;
