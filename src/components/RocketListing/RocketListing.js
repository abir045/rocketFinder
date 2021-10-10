import React from "react";
import { useSelector } from "react-redux";
import { getAllRockets } from "../../features/rockets/rocketSlice";
import RocketCard from "../RocketCard/RocketCard";
import "./RocketListing.css";

const RocketListing = (props) => {
  const rockets = useSelector(getAllRockets);

  return (
    <div className="rocket-wrapper">
      <div className="rocket-list">
        <h2>Rockets</h2>
        <form class="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
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
