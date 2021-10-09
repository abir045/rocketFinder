import React from "react";
import "./RocketCard.css";

const RocketCard = (props) => {
  const { data } = props;
  return (
    <div className="card">
      <img src={data.links.mission_patch} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.mission_name}</h5>

        <p className="card-text">{data.launch_year}</p>
        <p className="card-text">{data.details}</p>
      </div>
    </div>

    // </div>
  );
};

export default RocketCard;
