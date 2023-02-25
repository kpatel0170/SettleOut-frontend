import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import commonApi from "../../api/common";
import {  useNavigate } from "react-router-dom";


// const agentData = [
//   {
//     id: 1,
//     name: "Agent 1",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     rating: 4.5,
//     feedbacks: ["Great agent!", "Very professional"],
//   },
//   {
//     id: 2,
//     name: "Agent 2",
//     bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     rating: 3.8,
//     feedbacks: ["Could improve communication"],
//   },
//   {
//     id: 3,
//     name: "Agent 3",
//     bio:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     rating: 4.2,
//     feedbacks: [
//       "Very knowledgeable about the market",
//       "Always available to answer questions",
//     ],
//   },
// ];

const AgentsList = () => {
  const [agentList, setAgentList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const list = async () => {
      await commonApi({
        action: "agentList",
        data: {
         query:{
          accountType:"agent",
         }
        },
      })
        .then(({ DATA = {}, MESSAGE }) => {
         setAgentList(DATA.data)
        })
        .catch((error) => {
          console.error(error);
        });
    };
    list();
  }, []);
  const handleSelectAgent = (id) => {
   navigate("/cards",{state:{agentId:id}})
  };

  
  return (
    <>
    
    <div className="grid grid-rows">
      {agentList.map((agent) => (
        <div key={agent.id} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-medium">{agent.fullName}</h3>
          <p className="text-gray-600 mt-2">{agent.bio}</p>
          <div className="flex justify-between mt-4">
            <div className="flex items-center">
              <span className="text-gray-600">Rating:</span>
              <span className="ml-1 text-yellow-400">{agent.ratings}</span>
            </div>
            <div className="flex space-x-4">
              {/* <button
                onClick={() => handleViewProfile(agent.id)}
                className="bg-blue-500 text-white px-3 py-2 rounded"
                >
                View Profile
              </button> */}
              <button
                onClick={() => handleSelectAgent(agent._id)}
                className="bg-green-500 text-white px-3 py-2 rounded"
                >
                Select Agent
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
      </>
  );
};

export default AgentsList;