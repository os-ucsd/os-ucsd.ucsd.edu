import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import UpcomingEvents from "../events/UpcomingEvents";
import PastEvents from "../events/PastEvents";

class Event extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <h2 className="events-title" style={{ marginTop: "100px", fontSize: "40px", textAlign: "center", padding: "10px" }}>Upcoming Events</h2>
                <h3 style={{ marginTop: "20px", fontSize: "30px", textAlign: "center", padding: "5px" }}> Coming soon </h3>
                <UpcomingEvents />
                <h2 className="events-title" style={{ marginTop: "40px", fontSize: "40px", textAlign: "center", padding: "10px" }}>Past Events</h2>
                <PastEvents />
                <Footer />
            </div>
        )
    }
}

export default Event