import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="about-container">
        <h2>About</h2>
        <h3>This is Namaste React Web Series</h3>
        <UserClass name="Rupesh" location="Hyderabad" />
      </div>
    );
  }
}

export default About;
