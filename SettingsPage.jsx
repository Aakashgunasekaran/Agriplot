import React, { useState } from "react";
import { Card } from "../components/Card";
import { ToggleSwitch } from "../components/ToggleSwitch";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-8">
      <Card>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <ToggleSwitch
            isOn={notifications}
            handleToggle={() => setNotifications(!notifications)}
          />
        </div>
      </Card>
    </div>
  );
};

export default SettingsPage;
