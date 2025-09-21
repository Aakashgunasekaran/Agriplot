import React, { useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

const InputFormPage = ({ setView }) => {
  const [crop, setCrop] = useState("");
  const [region, setRegion] = useState("");
  const [soil, setSoil] = useState("");

  return (
    <div className="p-8">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Input Details</h2>
        <input
          type="text"
          placeholder="Crop"
          className="border p-2 rounded-lg w-full mb-2"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
        />
        <input
          type="text"
          placeholder="Region"
          className="border p-2 rounded-lg w-full mb-2"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        />
        <input
          type="text"
          placeholder="Soil Type"
          className="border p-2 rounded-lg w-full mb-2"
          value={soil}
          onChange={(e) => setSoil(e.target.value)}
        />
        <Button className="mt-4 w-full" onClick={() => setView("results")}>
          Submit
        </Button>
      </Card>
    </div>
  );
};

export default InputFormPage;
