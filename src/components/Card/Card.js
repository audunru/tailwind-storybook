import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ title = "", image = "", children }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={image} alt="Sunset in the mountains" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">{children}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string
};

export default Card;
