import React from "react";
import RocketListing from "../RocketListing/RocketListing";
// import rocketApi from "../../globals/apis/rocketApi";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addRockets } from "../../features/rockets/rocketSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await axios
        .get("https://api.spacexdata.com/v3/launches")

        .catch((err) => {
          console.log("Err:", err);
        });
      console.log(response.data[0].mission_name);
      console.log(response);
      dispatch(addRockets(response.data));
    };
    fetchRockets();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <RocketListing />
    </div>
  );
};

export default Home;
