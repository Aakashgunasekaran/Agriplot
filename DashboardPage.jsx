import React from "react";
import { SectionCard } from "../components/SectionCard";

const DashboardPage = () => (
  <div className="p-8 grid grid-cols-2 gap-4">
    <SectionCard title="Moisture" value="70%" />
    <SectionCard title="Fertilizer" value="Optimal" />
    <SectionCard title="Pest Risk" value="Low" />
    <SectionCard title="Weather" value="Favorable" />
  </div>
);

export default DashboardPage;
