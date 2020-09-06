import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import EventList from '../components/event-list';
import '../css/event.css';

class Event extends React.Component {

    render() {
        /*
        return (
            <div>
                <Header />
                <h2 className="events-title" style={{ marginTop: "100px", fontSize: "40px", textAlign: "center", padding: "10px" }}>Upcoming Events</h2>
                <h3 style={{ marginTop: "20px", fontSize: "30px", textAlign: "center", padding: "5px" }}> Coming soon </h3>
                <UpcomingEvents />
                <h2 className="events-title" style={{ marginTop: "40px", fontSize: "40px", textAlign: "center", padding: "10px" }}>Past Events</h2>
                <PastEvents />
                <EventList type="past" />
                <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                    <Footer />
                </div>
            </div>
        )
        */
       return (
           <div className="events-container">
                <div className="event-list-container">
                    <h2 className="events-header">Upcoming Events</h2>
                    <EventList type="upcoming" />
                    <h2 className="events-header">Past Events</h2>
                    <EventList type="past" />
                </div>
           </div>
       )
    }
}

export default Event