import React from "react";

export const Button = ({ className, children, ...props }) => (
  <button
    className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${className}`}
    {...props}
  >
    {children}
  </button>
);
