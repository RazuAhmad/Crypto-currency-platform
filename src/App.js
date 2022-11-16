import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Overview from "./Components/Overview/Overview";
import GetStarted from "./Components/GetStarted/GetStarted";
import BitCoinJourney from "./Components/BitCoinJourney/BitCoinJourney";

const App = () => {
  return (
    <div className="app_container app__background">
      <Navbar />
      <BitCoinJourney />
      <Overview />
      <GetStarted />
    </div>
  );
};

export default App;
