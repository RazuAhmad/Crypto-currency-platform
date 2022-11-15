import React from "react";
import tourImg from "../../images/hiking toward hill.jpg";
import "./TourSection.css";

const TourSection = () => {
  return (
    <div className="tourSection__container section__padding">
      <div className="tourSection-image">
        <img src={tourImg} alt="tourImage" />
      </div>
      <div className="tourSection__text">
        <h1 className="title__text">
          Just have a hike here <br />
          and get the most Thrilling Feels
        </h1>
        <p style={{ color: "black", fontSize: "28px" }}>
          The traveler sees what he sees, the tourist sees what he has come to
          see
        </p>
        <p>
          <button className="tourSection__button button__bg">
            Show Details
          </button>
        </p>
      </div>
    </div>
  );
};

export default TourSection;
