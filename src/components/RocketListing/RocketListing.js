import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllRockets } from "../../features/rockets/rocketSlice";
import RocketCard from "../RocketCard/RocketCard";
import "./RocketListing.css";

const RocketListing = (props) => {
  const rockets = useSelector(getAllRockets);
  const [searchTitle, setSearchTitle] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    setOutput([]);
    rockets.filter((val) => {
      if (
        val.rocket.rocket_name.toLowerCase().includes(searchTitle.toLowerCase())
      ) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [searchTitle]);

  return (
    <div className="rocket-wrapper">
      <div className="rocket-list">
        <h2>Rockets</h2>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="row">
          {output.map((rocket, index) => (
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
