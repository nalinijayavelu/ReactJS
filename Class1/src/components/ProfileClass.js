import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Location",
        location: "Dummy Location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nalinijayavelu");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.userInfo !== prevState.count) {
      console.log("state changed ");
    }
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.login}</h2>
        <h2>Location: Bangalore</h2>
      </>
    );
  }
}
export default ProfileClass;
