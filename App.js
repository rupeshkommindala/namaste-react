import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "Learning by Rupesh K"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hi"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
