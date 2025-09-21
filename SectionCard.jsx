import React from "react";
import { Card } from "./Card";

export const SectionCard = ({ title, value }) => (
  <Card className="flex-1 text-center">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold text-green-700">{value}</p>
  </Card>
);
