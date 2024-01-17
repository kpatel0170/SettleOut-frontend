import React from "react";
import Pricing from "./Pricing";

function Homepage({ featured = false, children = null }) {
  return (
    <>
      {/* Hero Section */}
      <div className="p-6 md:p-6 py-3 mx-4 md:mx-20">
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
      <div className="bg-gray-700 py-16 text-white">
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

      <Pricing />

      {/* Featured Job Opportunity Section */}
      <div className="p-8">
        {" "}
        <div className="flex felx-col items-center justify-center"> </div>{" "}
        <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
          {" "}
          Full-Funnel Social Analytics{" "}
        </h1>{" "}
        <p className="text-center mt-6 text-lg font-light text-gray-500">
          {" "}
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {" "}
        <div className="p-8">
          {" "}
          <div className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
            {" "}
            Social conversations{" "}
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.{" "}
          </p>{" "}
          <a
            className="text-indigo-500 flex items-center hover:text-indigo-600"
            href="/"
          >
            {" "}
            More about us icon{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />{" "}
            </svg>{" "}
          </a>{" "}
        </div>{" "}
        <div className="p-8">
          {" "}
          <div className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
            {" "}
            Social conversations{" "}
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.{" "}
          </p>{" "}
          <a
            className="text-green-500 flex items-center hover:text-green-600"
            href="/"
          >
            {" "}
            More about us icon{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />{" "}
            </svg>{" "}
          </a>{" "}
        </div>{" "}
        <div className="p-8">
          {" "}
          <div className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
            {" "}
            Social conversations{" "}
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            We get insulted by others, lose trust for those others. We get back
            stabbed by friends. It becomes harder for us to give others a hand.{" "}
          </p>{" "}
          <a
            className="text-red-500 flex items-center hover:text-red-600"
            href="/"
          >
            {" "}
            More about us icon{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />{" "}
            </svg>{" "}
          </a>{" "}
        </div>
      </div>
    </>
  );
}

export default Homepage;
