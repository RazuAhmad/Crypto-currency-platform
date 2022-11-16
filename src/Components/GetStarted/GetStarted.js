import React from "react";
import "./GetStarted.css";
import getStartedImg from "../../images/bitcoin-getStarted.svg";

const GetStarted = () => {
  return (
    <div className="getStarted__container section__padding getStartedBg">
      <h1>Get started with Bitcoin</h1>
      <div className="getStarted__main-content">
        <div className="getStarted__textual-content">
          <p>
            Bitcoin uses peer-to-peer technology to operate with no central
            authority or banks; managing transactions and the issuing of
            bitcoins is carried out collectively by the network. Through many of
            its unique properties, Bitcoin allows exciting uses that could not
            be covered by any previous payment system.
          </p>
          <p>
            <button className="BitCoinJourney__button button__bg">
              Learn More
            </button>{" "}
            <button className="anotherBackground BitCoinJourney__button">
              Our Story
            </button>
          </p>
        </div>
        <div className="getStartedImg-content">
          <img src={getStartedImg} alt="getImage" />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
