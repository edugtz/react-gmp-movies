import React from "react";
import ReactDOM from "react-dom";

import Title from "./components/Title";
import Subtitle from "./components/Subtitle";

// Functional Component
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Title />
      <Subtitle />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
