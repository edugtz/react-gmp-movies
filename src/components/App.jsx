import React from "react";

import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

// Component without JSX - React.createElement()
const Description = () => {
  return React.createElement(
    "div",
    null,
    "This app will let you watch your favorite movies"
  );
};

// Functional Component
const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Title />
      <Subtitle />
      <Description />
    </div>
  );
};

export default App;
