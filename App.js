import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const jsxHeading = <h1>Hello React using JSX</h1>;
const Title = () => <h1>Hello React using Title Component</h1>;
const HeadingComponent = () => {
  return (
    <div id="container">
      {jsxHeading}
      <Title />
      <Title></Title>
      {Title()}
      <h1>Hello React using Functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
