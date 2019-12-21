import React from "react";
import MenuBar from "./navbar";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MenuBar />
        This is event page
      </div>
    );
  }
}

export default Event;
