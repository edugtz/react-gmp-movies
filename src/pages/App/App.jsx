import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Movies from "../Movies/Movies";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-content">
          <div className="container">
            <div className="movie-filters">
              <div className="left-section">
                <p>ALL</p>
                <p>DOCUMENTARY</p>
                <p>COMEDY</p>
                <p>HORROR</p>
                <p>CRIME</p>
              </div>
              <div className="right-section">
                <p>SORT BY</p>
                <p>RELEASE DATE</p>
              </div>
            </div>
            <div className="movie-results-container">
              <span className="movie-results"><b>6</b> movies found</span>
            </div>
            <Movies />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
