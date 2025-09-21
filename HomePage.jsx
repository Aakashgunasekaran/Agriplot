import React from "react";
import { Button } from "../components/Button";

const HomePage = ({ setView }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <main className="flex-grow flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-green-800 mb-4">
          Smart Farming, Smarter Future
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Leverage AI to optimize crop yield and manage resources.
        </p>
        <Button onClick={() => setView("input")}>Start Your Analysis</Button>
      </div>
    </main>
  </div>
);

export default HomePage;
