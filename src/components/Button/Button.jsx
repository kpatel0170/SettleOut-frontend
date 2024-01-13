import PropTypes from "prop-types";
import * as React from "react";

function Button({ featured = false, children = null, onClick }) {
  return (
    <button
      className={`whitespace-nowrap w-full py-4 px-8 rounded-lg text-lg tracking-wide focus:outline-none focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50 ${
        featured
          ? "bg-indigo-600 hover:bg-indigo-700 text-white transform hover:scale-105 transition-all"
          : "bg-white text-indigo-600"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  featured: PropTypes.bool
};

export default Button;
