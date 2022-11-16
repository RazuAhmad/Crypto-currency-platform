import React from "react";
import tourImg from "../../images/bitCoin_intro-img.jpg";
import "./BitCoinJourney.css";

const BitCoinJourney = () => {
  return (
    <div className="BitCoinJourney__container section__padding">
      <div className="BitCoinJourney-image">
        <img src={tourImg} alt="tourImage" />
      </div>
      <div className="BitCoinJourney__text">
        <h1 className="title__text ">
          Just have a Journey with Crypto <br />
          and get the Most out of It!
        </h1>
        <p style={{ color: "black", fontSize: "28px" }}>
          The traveler sees what he sees, the tourist sees what he has come to
          see
        </p>
        <p>
          <button className="BitCoinJourney__button button__bg">
            Show Details
          </button>
        </p>
      </div>
    </div>
  );
};

export default BitCoinJourney;
