import React from 'react';
import '../css/event-card.css';
import defaultImg from '../events/events-imgs/default.jpg';

/**
 * A card to display events consistently throughout the website.
 * 
 * <EventCard 
 *      image={image} //Optional
 *      title="Test title"
 *      description="description"
 *      date="10/12/20"
 *      startTime="6:30pm"
 *      endTime="7:30pm"
 *      facebookLink="facebook.com" //Optional
 * />
 */
class EventCard extends React.Component {
    constructor(props) {
        super(props);
    }

    stringIsNotEmpty = text => text !== null && text !== "";

    render() {
        const {
            image, title, description, date, startTime, endTime,
            facebookLink
        } = this.props;

        // Use default image if no image provided
        const cardImg = image ? image : defaultImg;

        return(
            <div>
                <a href={facebookLink}>
                    <img className="event-img" src={cardImg} alt={title} width='280px' height='180px'/>
                </a>
                <h3 className="event-text">{title}</h3>
                <p className="event-text">{description}</p>
                <div className="date-time-contaner">
                    <p className="event-text">When: {date} {startTime} - {endTime}</p>
                </div>
            </div>
        )
    }
}

export default EventCard;