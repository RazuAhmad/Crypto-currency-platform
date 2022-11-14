import React from "react";
import tourImg from "../../images/hiking toward hill.jpg";
import "./TourSection.css";

const TourSection = () => {
  return (
    <div className="tourSection__container">
      <div className="tourSection-image">
        <img src={tourImg} alt="tourImage" />
      </div>
      <div className="tourSection__text">
        <h1>
          Just have a hike here and got <br /> Thrilling Feels
        </h1>
      </div>
    </div>
  );
};

export default TourSection;
