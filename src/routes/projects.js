import React from "react";
import MenuBar from "../components/navbar";
import "../css/project.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/search/repositories?q=topic:os-ucsd-project")
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <MenuBar />
        This is project page
      </div>
    );
  }
}

export default Project;
