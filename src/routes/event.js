import React from "react"
import EventList from '../components/event-list';
import '../css/event.css';

class Event extends React.Component {

    render() {
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