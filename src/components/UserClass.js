import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rupeshkommindala");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} style={{ height: "100px", width: "100px" }} />
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: @rupesh1542</h3>
      </div>
    );
  }
}
export default UserClass;
