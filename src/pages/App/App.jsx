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
        <Movies />
        <Footer />
      </div>
    );
  }
}

export default App;
