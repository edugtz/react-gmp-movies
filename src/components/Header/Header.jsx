import React from "react";

import "./Header.scss";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="container">
        <div className="top-section">
          <span className="app-title">
            <b>netflix</b>roulette
          </span>
          <button className="add-movie">+ ADD MOVIE</button>
        </div>
        <div className="main-section">
          <h2>FIND YOUR MOVIE</h2>
          <div className="search-section">
            <SearchBar />
            <button className="search-movies-button">SEARCH</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
