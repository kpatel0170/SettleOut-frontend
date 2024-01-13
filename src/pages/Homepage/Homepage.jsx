import React from "react";

function Homepage({ featured = false, children = null }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-100 p-6 md:p-16 mx-4 md:mx-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to Regina!
            </h1>
            <p className="text-lg mb-6 md:w-3/4">
              Settling into a new city is a daunting task, but we're here to
              help. Explore our packages and let our dedicated agents guide you
              through this exciting chapter of your life.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="/agent-list"
                className="bg-gray-900 hover:bg-gray-600 p-3 rounded-lg text-white text-center"
              >
                Choose an Agent
              </a>
              <a
                href="/contactus"
                className="btn-black bg-gray-900 hover:bg-gray-600 p-3 rounded-lg text-white text-center"
              >
                Contact Us
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

      {/* Featured Job Opportunity Section */}
      <div className="bg-purple-800 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Explore Exciting Job Opportunities with Us!
          </h1>
          <p className="text-lg mb-10 md:w-3/4 mx-auto">
            Discover new career prospects by becoming one of our agents. Join us
            now and be part of a dynamic community.
          </p>
          <a
            href="/upgrade"
            className="btn-black bg-gray-900 hover:bg-gray-600 p-3 rounded-lg"
          >
            Become an Agent
          </a>
        </div>
      </div>
    </>
  );
}

export default Homepage;
