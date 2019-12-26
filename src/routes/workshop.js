import React from "react";
import MenuBar from "../components/navbar";

class WorkShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MenuBar />
        This is workshop page
      </div>
    );
  }
}

export default WorkShop;
