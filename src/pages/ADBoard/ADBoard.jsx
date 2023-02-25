import React from "react";
import { Fragment } from "react";
import "./ADBoard.css";


const agentData = [
  {
      id: 1,
      name: "Om Dalwadi",
      bio: "BSc(Honors) in Computer Science.",
      rating: 4.5,
      feedbacks: ["Great agent!", "Very professional"],
  },
  {
      id: 2,
      name: "Kartik Patel",
      bio: "BSc in Computer Science.",
      rating: 3.8,
      feedbacks: ["Could improve communication"],
  },
  {
      id: 3,
      name: "Yug Shah",
      bio: "BSc(Honors) in Computer Science.",
      rating: 4.2,
      feedbacks: [
          "Very knowledgeable about the market",
          "Always available to answer questions",
      ],
  },
];


const ADBoard = () => {
  const handleSelectAgent = (id) => {
      console.log(`Agent with ID ${id} selected`);
  };

  const handleViewProfile = (id) => {
      const agent = agentData.find((agent) => agent.id === id);
      const feedback = agent.feedbacks.join(", ");

      const feedbackContainer = document.createElement("div");
      feedbackContainer.innerHTML = `
    <h2 class="text-lg font-medium mb-2">${agent.name} Feedback</h2>
    <p class="text-gray-600">${feedback}</p>
    <button
      class="bg-blue-500 text-white px-3 py-2 rounded mt-4"
      onclick="this.parentElement.remove()"
    >
      Go Back
    </button>
  `;

      document.body.appendChild(feedbackContainer);
  };


return (
<>
<div className="container">
    <ul className="cards">
    {agentData.map((agent) => (
      <li className="card" key={agent.id}>
     
        <div>
          <div className="row">
            <div className="column"> </div>
            <div className="column">
              <h3 className="card-title"><b>{agent.name}</b></h3>
              <div>
               <h4>Ratings: {agent.rating}</h4>
              </div>
              <br></br>
            </div>
          </div>
          <div className="card-content">
            <p>{agent.bio}</p>
          </div>
        </div>
        <div className="card-link-wrapper">
          <a href=""  onClick={() => handleSelectAgent(agent.id)} className="wp-block-button__link has-base-color has-text-color has-text-align-center wp-element-button card-link">Appoient</a>
        </div>
      </li>
      ))}
      
    </ul>
   
  </div>


</>


    );
};

export default ADBoard;