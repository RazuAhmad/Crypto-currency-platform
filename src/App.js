import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import TourSection from "./Components/TourSection/TourSection";
import Overview from "./Components/Overview/Overview";
import GetStarted from "./Components/GetStarted/GetStarted";

const App = () => {
  return (
    <div className="app_container app__background">
      <Navbar />
      <TourSection />
      <Overview />
      <GetStarted />
    </div>
  );
};

export default App;
