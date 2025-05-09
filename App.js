import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Hello React🚀");

// React Element
const jsxHeading = <h1>Namaste React using JSX</h1>;

// React Component
const Heading = () => {
  return <h1>Namaste React using Functional Component</h1>;
};

// React Component
const Title = () => {
  return <h1 id="heading">Namaste React using Title Component</h1>;
};

const data = 10000;

// React Component
const HeadingComponent = () => (
  <div id="root">
    <h1>{data}</h1>
    <Title />
    <h1 id="heading">Namaste React using Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
