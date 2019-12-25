import React from "react";
import MenuBar from "../components/navbar";
import "../css/project.css";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
