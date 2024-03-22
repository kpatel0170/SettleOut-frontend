import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import commonApi from "../../api/common";
import AProfile from "./ViewProfileModal";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 border-solid h-12 w-12 border-r-4 rounded-full animate-spin"></div>
    </div>
  );
};

const AList = () => {
  const [agentList, setAgentList] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgentList = async () => {
      try {
        const { DATA = {} } = await commonApi({
          action: "agentList",
          data: {
            query: {
              accountType: "agent"
            }
          }
        });

        setAgentList(DATA.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchAgentList();
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 gap-1 p-5  mx-auto lg:px-[170px] bg-gray-100 dark:bg-gray-800">
          {agentList.map((agent) => (
            <div
              key={agent.id}
              className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 mb-7 transition duration-300 transform hover:scale-105"
            >
              <div className="text-2xl text-gray-800 dark:text-white font-medium mb-2">
                {agent.fullName}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
                Origin: {agent.homeCountry}
              </p>
              <div className="flex justify-between mt-3">
                <div className="flex items-center">
                  <span className="text-lg text-gray-600 dark:text-gray-400">
                    Rating:
                  </span>
                  <span className="text-lg font-bold ml-1 text-yellow-400">
                    {agent.ratings}
                  </span>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleViewProfile(agent)}
                    className="bg-gray-500 dark:bg-gray-600 text-white px-3 py-2 rounded"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={() => handleSelectAgent(agent._id)}
                    className="bg-blue-500 dark:bg-blue-600 text-white px-3 py-2 rounded"
                  >
                    Select Agent
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && <AProfile agent={selectedAgent} onClose={closeModal} />}
    </>
  );
};

export default AList;
