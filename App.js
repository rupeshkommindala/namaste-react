import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

// React Component
const Heading = () => {
  return <h1 id="heading">{elem}Namaste React using Functional Component</h1>;
};

// React Component
const Title = function () {
  return (
    <div>
      <h1 id="heading">Namaste React</h1>
    </div>
  );
};

// React Component
const HeadingComponent = () => (
  <div id="container">
    <Heading />
    <Title />
    <Title></Title>
    {Title()}
    <h1 id="heading">Namaste React using Functional Component2</h1>
  </div>
);

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");
console.log(heading);

// React Element
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
