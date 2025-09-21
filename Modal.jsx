import React from "react";

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        {children}
        <button
          className="mt-4 w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};
