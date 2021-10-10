import React, { useState } from "react";
import rocket from "../../images/rocket.svg";
import "./Header.css";

const Header = () => {
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img style={{ width: "100px" }} src={rocket} alt="user" />
          Rocket Finder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form onSubmit={submitHandler} class="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setTerm(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    // <div className="header">
    //   <Link to="/">
    //     <div className="logo">Rocket Finder</div>
    //   </Link>

    //   <div className="user-image">
    //     <img src={rocket} alt="user" />
    //   </div>
    // </div>
  );
};

export default Header;
