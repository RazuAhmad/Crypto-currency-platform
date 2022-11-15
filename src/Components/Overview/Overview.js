import React from "react";
import "./Overview.css";
import individuals from "../../images/individuals-icon.svg";
import business from "../../images/business-icons.svg";
import developers from "../../images/developers-icons.svg";
import arrowDownIcon from "../../images/arrow_down-icon.svg";

const Overview = () => {
  return (
    <div className="overview__container section__padding">
      <h1>Get a quick overview for</h1>
      <div className="overview__container_section-parent">
        <div className="overview__container-section">
          <p>
            <img src={individuals} alt="individuals" />
          </p>
          <h1>Individuals</h1>
          <p>Learn more</p>
        </div>

        <div className="overview__container-section">
          <p>
            <img src={business} alt="individuals" />
          </p>
          <h1>Businesses</h1>
          <p>Learn more</p>
        </div>

        <div className="overview__container-section">
          <p>
            <img src={developers} alt="individuals" />
          </p>
          <h1>Developers</h1>
          <p>Learn more</p>
        </div>
      </div>
      <p className="arrowDownImg">
        <img src={arrowDownIcon} alt="arrowDownIcon" />
      </p>
    </div>
  );
};

export default Overview;
