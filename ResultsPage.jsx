import React from "react";
import { Card } from "../components/Card";

const ResultsPage = () => (
  <div className="p-8">
    <Card>
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <p className="text-gray-700">Predicted yield: 85%</p>
    </Card>
  </div>
);

export default ResultsPage;
