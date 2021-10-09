import React from "react";
import { useSelector } from "react-redux";
import { getAllRockets } from "../../features/rockets/rocketSlice";
import RocketCard from "../RocketCard/RocketCard";
import "./RocketListing.css";

const RocketListing = () => {
  const rockets = useSelector(getAllRockets);

  console.log(rockets);

  return (
    <div className="rocket-wrapper">
      <div className="rocket-list">
        <h2>Rockets</h2>
        <div className="row">
          {rockets.map((rocket, index) => (
            <div className="col">
              <RocketCard key={index} data={rocket} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RocketListing;
