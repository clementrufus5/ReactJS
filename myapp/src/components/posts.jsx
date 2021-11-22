import axios from "axios";
import React, { Component } from "react";
import PostTable from "./postTable";

class Posts extends React.Component {
  state = {
    array: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({ array: response.data }))
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <PostTable array={this.state.array} />
      </div>
    );
  }
}

export default Posts;
