import events from '../data/events-data';

const getPastEvents = () => {
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

    return pastEvents;
}


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

export { getPastEvents, getUpcomingEvents }