import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React🚀"
);

// React Component
const HeadingComponent2 = () => <h1 id="heading">Namaste React using FC</h1>;

//React Component
const Title = () => {
  return <h1 id="heading">Namaste React using Title Component</h1>;
};
// React Component
const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      <h2>{2 + 4}</h2>
      {console.log("Hi Rupesh")}
      <h1 id="heading">Namaste React using Functional Component🚀</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
