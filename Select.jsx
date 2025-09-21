import React from "react";

export const Select = ({ options, value, onChange, className }) => (
  <select
    className={`border border-gray-300 rounded-lg p-2 w-full ${className}`}
    value={value}
    onChange={onChange}
  >
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
