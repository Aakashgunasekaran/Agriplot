import React from "react";
import { HomeIcon, InputIcon, ResultsIcon, DashboardIcon, ProfileIcon, SettingsIcon } from "./icons";

export const BottomNavigationBar = ({ currentView, setView }) => {
  const navItems = [
    { icon: <HomeIcon />, label: "Home", view: "home" },
    { icon: <InputIcon />, label: "Input", view: "input" },
    { icon: <ResultsIcon />, label: "Results", view: "results" },
    { icon: <DashboardIcon />, label: "Dashboard", view: "dashboard" },
    { icon: <ProfileIcon />, label: "Profile", view: "profile" },
    { icon: <SettingsIcon />, label: "Settings", view: "settings" },
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-inner flex justify-around py-2">
      {navItems.map(({ icon, label, view }) => (
        <button
          key={view}
          onClick={() => setView(view)}
          className={`flex flex-col items-center text-xs ${
            currentView === view ? "text-green-600" : "text-gray-500"
          }`}
        >
          {icon}
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
};
