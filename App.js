import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement("h1", { id: "heading" }, "Namaste React🚀");

// React Element
const jsxHeading = <h1 id="heading">Namaste React using JSX🚀</h1>;

// React Functional Component
const Heading = () => {
  return <h1 id="heading">Namaste React using Functional Component</h1>;
};

// React Functional Component
const Title = () => {
  return <h1 id="heading">Namaste React using Title Component</h1>;
};

// React Functional Component

const HeadingComponent = () => {
  return (
    <div id="container">
      <Heading />
      <Title />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
