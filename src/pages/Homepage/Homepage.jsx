import React from "react";
import Pricing from "./Pricing";
import Hero from "./Hero";
// import Features from "./Features/Features";

function Homepage({ featured = false, children = null }) {
  return (
    <>
      <Hero />
      {/* Features Section */}
      {/* <Features /> */}

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
    </>
  );
}

export default Homepage;
