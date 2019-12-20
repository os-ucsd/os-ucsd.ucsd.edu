import React from "react";
import MenuBar from "./navbar";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MenuBar />
        This is contact page
      </div>
    );
  }
}

export default Contact;
