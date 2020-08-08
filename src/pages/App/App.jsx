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
            <span className="movie-results"><b>6</b> movies found</span>
            <Movies />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
