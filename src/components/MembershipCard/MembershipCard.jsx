import PropTypes from "prop-types";
import Button from "../Button/Button";
import { FaCheck } from "react-icons/fa6";
import React from "react";

function MembershipCard({
  _id,
  name = "",
  price = 0,
  currency = "$",
  frequency = "month",
  services = [],
  featured = false,
  handleSubmit
}) {
  return (
    <div
      className={`cursor-pointer m-4 rounded-xl shadow-xl bg-white text-black dark:bg-gray-800 border ${
        featured
          ? "border-indigo-600 border-2 relative z-10"
          : "border border-opacity-10"
      }`}
      style={{ paddingTop: featured ? "2rem" : "0" }}
    >
      {/* Emphasized header */}
      {featured && (
        <span className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-indigo-600 rounded-full px-6 py-1 uppercase text-white text-sm font-semibold tracking-wide whitespace-nowrap z-20">
          Most popular
        </span>
      )}

      {/* Card header */}
      <div className="py-12 px-6 border-b-2 border-gray-200 dark:border-gray-700">
        <p className="text-3xl font-semibold text-center mb-4">{name}</p>
        <div className="flex items-center justify-center">
          <div className="flex items-start">
            <p className="text-2xl sm:text-4xl font-medium mt-0 sm:mt-1 mr-0 sm:mr-1">
              {currency}
            </p>
            <p className="text-4xl sm:text-7xl font-bold mr-1 sm:mr-2">
              {price}
            </p>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="bg-gray-100 dark:bg-gray-900 p-6 sm:p-8 xl:p-12">
        {/* Features list */}
        <div className="mb-12">
          {services.map((feature, i) => (
            <div className="flex items-center mb-3" key={i}>
              <FaCheck className="w-6 h-6 mr-2 sm:mr-4 text-green-500 flex-shrink-0" />
              <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button featured={featured} onClick={() => handleSubmit(_id, price)}>
          Proceed to Pay
        </Button>
      </div>
    </div>
  );
}

MembershipCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  frequency: PropTypes.oneOf(["month", "year"]),
  services: PropTypes.arrayOf(PropTypes.string),
  featured: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default MembershipCard;
