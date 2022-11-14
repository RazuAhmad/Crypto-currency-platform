import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import TourSection from "./Components/TourSection/TourSection";

const App = () => {
  return (
    <div className="app_container">
      <Navbar />
      <TourSection />
    </div>
  );
};

export default App;
