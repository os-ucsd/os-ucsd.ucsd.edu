import React from 'react';
import events from './events-data';
import defaultImg from './events-imgs/default.jpg';
import './UpcomingEvents.css';
import Grid from '@material-ui/core/Grid'

const UpcomingEvents = () => {
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

    // make a card for every event in events
    const eventCompon = upcomingEvents ? upcomingEvents.map(event => 
            <div className='event-inner-container'>
                {
                    // if no image specified, will use the default image
                    event.imageUrl ? 
                        <img className='event-img' src={event.imageUrl} width='380px' height='200px'/> :
                        <img className='event-img' src={defaultImg} width='380px' height='200px'/>
                }
                <h5 className='event-text'>{event.name}</h5>
                <p className='event-text'>{event.date} {event.startTime}-{event.endTime} </p>
                <p className='event-text'>{event.location}</p>
            </div>
    ) : null

    return(
       <div className='event-outer-container'>
           {eventCompon}
       </div>
    )
}

export default UpcomingEvents;