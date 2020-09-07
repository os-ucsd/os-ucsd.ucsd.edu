import React from 'react';
import EventCard from '../components/event-card';
import defaultImg from '../images/events-imgs/default.jpg';
import '../css/event.css';

import { getPastEvents, getUpcomingEvents } from '../utils/event-utils';

const EventList = props => {
    const { type } = props;
    let eventList = type === "past" ? getPastEvents() :
        type === "upcoming" ? getUpcomingEvents() : null;

    const eventComponent = eventList && eventList.length > 0 ? eventList.map((event, i) =>
        <div className="event-card-container" key={i}>
            <EventCard
                image={event.imageUrl ? event.imageUrl : defaultImg}
                title={event.title}
                description=""
                date={event.date}
                startTime={event.startTime}
                endTime={event.endTime}
                location={event.location}
                size="sm"
                facebookLink={event.facebookLink} />
        </div>
    ) : null

    return (
        <div className='event-outer-container'>
            {eventComponent}
        </div>
    );
}

export default EventList;