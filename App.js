import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import InputFormPage from "./pages/InputFormPage";
import ResultsPage from "./pages/ResultsPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { BottomNavigationBar } from "./components/BottomNavigationBar";

function App() {
  const [view, setView] = useState("home");

  const renderView = () => {
    switch (view) {
      case "home":
        return <HomePage setView={setView} />;
      case "input":
        return <InputFormPage setView={setView} />;
      case "results":
        return <ResultsPage />;
      case "dashboard":
        return <DashboardPage />;
      case "profile":
        return <ProfilePage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <HomePage setView={setView} />;
    }
  };

  return (
    <div className="bg-stone-100 min-h-screen">
      {renderView()}
      <BottomNavigationBar currentView={view} setView={setView} />
    </div>
  );
}

export default App;
