import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-2xl shadow-md p-6 ${className}`}>
    {children}
  </div>
);
