import React from 'react';
import events from '../data/events-data';
import EventCard from '../components/event-card';
import defaultImg from './events-imgs/default.jpg';
import '../css/UpcomingEvents.css';

const getUpcomingEvents = () => {
    // create array of only UPCOMING events (end time > curr time)
    let upcomingEvents = [];
    const currTime = new Date();

    for (let i = 0; i < events.length; i++){
        // get date of end time for event
        const endTime = new Date(events[i].date);
        let parsedEndArr = events[i].endTime.split(':');
        // get indiv hours and mins of the end time
        let parsedEndHour = parseInt(parsedEndArr[0]);
        let parsedEndMin = parsedEndArr[1].replace(/\D/g,'');

        // check if am or pm (if pm, need to add 12)
        let amorpm = parsedEndArr[1].replace(/[0-9]/g, '').toLowerCase();
        if (amorpm === 'pm'){
            parsedEndHour += 12;
        }

        // set the hour of the end time
        endTime.setTime(endTime.getTime() + parsedEndHour * 1000 * 60 * 60);
        // set the mins of the end time
        endTime.setTime(endTime.getTime() + parsedEndMin * 1000 * 60);
        
        // if end time is later than now, then is upcoming
        if (currTime < endTime){
            upcomingEvents.push(events[i])
        }
    }

    return upcomingEvents;
}

const UpcomingEvents = () => {
    const upcomingEvents = getUpcomingEvents();
    const upcomingEventCompon = upcomingEvents && upcomingEvents.length > 0 ? upcomingEvents.map((event, i) => 
        <div className="event-card-container">
            <EventCard 
                image={event.imageUrl ? event.imageUrl : defaultImg} 
                title={event.name}
                description=""
                date={event.date}
                startTime={event.startTime}
                endTime={event.endTime}
                location={event.location}
                facebookLink={event.facebookUrl}/>
        </div>
    ) : null

    return(
        <div>
            <div className='event-outer-container'>
                {upcomingEventCompon}
            </div>
        </div>
    )
}

export default UpcomingEvents;