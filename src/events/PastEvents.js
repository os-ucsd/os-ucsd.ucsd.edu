import React from 'react';
import events from './events-data';
import defaultImg from './events-imgs/default.jpg';
import './UpcomingEvents.css';

const PastEvents = () => {
    // create array of only PAST events (end time < curr time)
    let pastEvents = [];
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
        
        // if now is later than end time, then is past event
        if (currTime > endTime){
            pastEvents.push(events[i])
        }
    }

    // make a card for every event in events
    const eventCompon = pastEvents ? pastEvents.map((event, i) => {
            const hasFacebook = event.facebookUrl !== '';

            return(
                <div key={i} className='event-inner-container'>
                    {
                        // if no image specified, will use the default image
                        event.imageUrl ? 
                             hasFacebook ?
                                <a href={event.facebookUrl}>
                                    <img className='event-img' alt={event.name} src={event.imageUrl} 
                                        width='380px' height='200px'/>
                                </a> :
                                <img className='event-img' alt={event.name} src={event.imageUrl} 
                                    width='380px' height='200px'/> 
                        : hasFacebook ?
                            <a href={event.facebookUrl}>
                                <img className='event-img' alt={event.name} src={defaultImg} 
                                    width='380px' height='200px'/> 
                            </a> :
                            <img className='event-img' alt={event.name} src={defaultImg} 
                                width='380px' height='200px'/>    
                    }
                    <h5 className='event-text'>{event.name}</h5>
                    <p className='event-text'>{event.date} {event.startTime}-{event.endTime} </p>
                    <p className='event-text'>{event.location}</p>
                </div>
            )
    }) : null

    return(
       <div className='event-outer-container'>
           {eventCompon}
       </div>
    )
}

export default PastEvents;