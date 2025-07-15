import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button
    className={
      "bg-blue-700 hover:bg-regal-blue text-white font-bold py-2 px-4 rounded" +
      props.className
    }
    {...props}
  >
    {children}
  </button>
);

export default Button;
