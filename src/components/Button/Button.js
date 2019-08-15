import React from "react";

import "./Button.css";

const Button = ({ children }) => (
  <button className="bg-blue-700 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded">
    {children}
  </button>
);

export default Button;
