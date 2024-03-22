import React from "react";

const plansData = [
  {
    name: "Basic",
    price: {
      monthly: 9,
      annually: 90
    },
    description: "Lorem ipsum dolor sit amet.",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  {
    name: "Pro",
    price: {
      monthly: 19,
      annually: 190
    },
    description: "Lorem ipsum dolor sit amet.",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  {
    name: "Premium",
    price: {
      monthly: 29,
      annually: 290
    },
    description: "Lorem ipsum dolor sit amet.",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
];

const Pricing = () => {
  return (
    <div className="antialiased w-full h-full dark:bg-gray-900 dark:text-white font-inter p-10">
      <div className="container mx-auto">
        <div>
          <div id="title" className="text-center my-10">
            <h1 className="font-bold text-4xl">Pricing Plans</h1>
            <p className="text-gray-400 text-xl">Here are our pricing plans</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
            {plansData.map((plan, index) => (
              <div
                key={index}
                className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in bg-gray-300 dark:bg-gray-800"
              >
                <div className="w-full py-5 border-b border-gray-400 dark:border-gray-600">
                  <h2 className="font-bold text-3xl">{plan.name}</h2>
                  <h3 className="font-bold text-xl mt-2">
                    ${plan.price.monthly}
                    <sup>.99</sup>/month
                  </h3>
                </div>
                <div className="">
                  <div className="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto fill-current text-blue-600 dark:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <p className="text-gray-500 dark:text-gray-400 text-sm pt-2">
                      {plan.description}
                    </p>
                  </div>
                  <div className="leading-8 mb-10 text-lg font-light">
                    <ul className="text-gray-500 pl-5 dark:text-gray-400">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <span className="w-4 h-4 mr-2 mt-1 inline-flex items-center justify-center bg-blue-600 text-white dark:bg-blue-400 dark:text-gray-800 rounded-full flex-shrink-0">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="w-full mt-10 px-6">
                      <a
                        href="#"
                        className="w-full block text-white dark:text-gray-900 bg-gray-700 dark:bg-gray-300 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-blue-700 dark:hover:bg-blue hover:text-white"
                      >
                        Choose
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
