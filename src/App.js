import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Overview from "./Components/Overview/Overview";
import GetStarted from "./Components/GetStarted/GetStarted";
import BitCoinJourney from "./Components/BitCoinJourney/BitCoinJourney";
import LearnMore from "./Components/LearnMore/LearnMore";

const App = () => {
  return (
    <div className="app_container app__background">
      <Navbar />
      <BitCoinJourney />
      <Overview />
      <GetStarted />
      <LearnMore />
    </div>
  );
};

export default App;
