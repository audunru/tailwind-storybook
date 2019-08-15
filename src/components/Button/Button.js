import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

const buttonClasses = variant =>
  classNames({
    "bg-blue-700 hover:bg-regal-blue": !variant || variant === "primary",
    "bg-gray-700 hover:bg-gray-900": variant === "secondary",
    "text-white font-bold py-2 px-4 rounded": true
  });

const Button = ({ variant, children }) => (
  <button className={buttonClasses(variant)}>{children}</button>
);

Button.propTypes = {
  variant: PropTypes.string
};

export default Button;
