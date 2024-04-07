import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <button className="bg-blue-700 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded">
    {children}
  </button>
);

export default Button;
