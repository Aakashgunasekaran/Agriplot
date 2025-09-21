import React from "react";
import { Card } from "../components/Card";

const ProfilePage = () => (
  <div className="p-8">
    <Card>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p>Name: Farmer Joe</p>
      <p>Region: Midwest</p>
    </Card>
  </div>
);

export default ProfilePage;
