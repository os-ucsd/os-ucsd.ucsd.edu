import React from "react";
import MenuBar from "../components/navbar";
import UpcomingEvents from '../events/UpcomingEvents';
import PastEvents from '../events/PastEvents';
//import Background from "../images/project.jpg";
import Background from "../images/material-space/material-space2.jpg";

import "../css/event.css";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MenuBar />
        {/*Banner*/}
        <section
          id="banner"
          style={{ backgroundImage: `url(${Background})`, height: "20px" }}>
          <div className="inner">
            <div className="content">
              <h2>Events</h2>
            </div>
          </div>
        </section>

        <h2 className='events-title'>Upcoming Events</h2>
        <UpcomingEvents />
        <h2 className='events-title'>Past Events</h2>
        <PastEvents />
      </div>
    );
  }
}

export default Event;
