import React from "react";

import "./Header.scss";
// import headerImage from "../../../public/images/movies-background.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      {/* <img src={headerImage} alt="movies" /> */}
      <div className="container">
        <div className="top-section">
          <span className="app-title">
            <b>netflix</b>roulette
          </span>
          <button className="add-movie">+ ADD MOVIE</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
