import React from "react";

function Homepage({ featured = false, children = null }) {
  return (
    <>

      {/* Hero Section */}
      <div className="bg-gray-100 p-16 mx-4 md:mx-20">
        <div className="container mx-auto">
          <div className="md:flex md:items-center md:space-x-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-4">Welcome to Regina!</h1>
              <p className="text-lg mb-4">
                We understand that settling into a new city is a daunting task,
                which is why we offer a range of packages to assist you with
                essential services upon your arrival.
              </p>
              <p className="text-lg">
                Our dedicated agents are here to help you navigate your way
                through this exciting new chapter of your life.
              </p>
              <div className="mt-8 flex space-x-4">
                <a href="/agent-list" className="btn btn-primary">
                  Choose an Agent
                </a>
                <a href="/contactus" className="btn btn-secondary">
                  Contact
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                className="w-full h-auto rounded-xl"
                alt="edu_settleout"
                src="https://media.discordapp.net/attachments/1063577425549725762/1078126567496101929/ArtsCareerConversations_LandingaJob.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Job Opportunity Section */}
      <div className="flex bg-purple-800 py-16 text-white">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">
            Ah, I see you've taken the time to explore our website in search of
            a new job opportunity.
          </h1>
          <p className="text-lg mb-14">
            We will be pleased to have you onboard! Apply to become an agent now.
          </p>
          <a href="/upgrade" className="btn btn-white">
            Become An Agent
          </a>
        </div>
      </div>
    </>
  );
}

export default Homepage;
