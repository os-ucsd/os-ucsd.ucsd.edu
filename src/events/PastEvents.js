import React from 'react';
import events from '../data/events-data';
import EventCard from '../components/event-card';
import defaultImg from './events-imgs/default.jpg';
import '../css/UpcomingEvents.css';

const getPastEvents = () => {
    // create array of only PAST events (end time < curr time)
    let pastEvents = [];
    const currTime = new Date();

    for (let i = 0; i < events.length; i++) {
        // get date of end time for event
        const endTime = new Date(events[i].date);
        let parsedEndArr = events[i].endTime.split(':');
        // get indiv hours and mins of the end time
        let parsedEndHour = parseInt(parsedEndArr[0]);
        let parsedEndMin = parsedEndArr[1].replace(/\D/g, '');

        // check if am or pm (if pm, need to add 12)
        let amorpm = parsedEndArr[1].replace(/[0-9]/g, '').toLowerCase();
        if (amorpm === 'pm') {
            parsedEndHour += 12;
        }

        // set the hour of the end time
        endTime.setTime(endTime.getTime() + parsedEndHour * 1000 * 60 * 60);
        // set the mins of the end time
        endTime.setTime(endTime.getTime() + parsedEndMin * 1000 * 60);

        // if now is later than end time, then is past event
        if (currTime > endTime) {
            pastEvents.push(events[i])
        }
    }

    return pastEvents;
}

const PastEvents = () => {
    const pastEvents = getPastEvents();
    const pastEventCompon = pastEvents && pastEvents.length > 0 ? pastEvents.map((event, i) =>
        <div className="event-card-container" key={event.name}>
            <EventCard
                image={event.imageUrl ? event.imageUrl : defaultImg}
                title={event.name}
                description=""
                date={event.date}
                startTime={event.startTime}
                endTime={event.endTime}
                location={event.location}
                facebookLink={event.facebookUrl} />
        </div>
    ) : null

    return (
        <div className='event-outer-container'>
            {pastEventCompon}
        </div>
    )
}

export default PastEvents;