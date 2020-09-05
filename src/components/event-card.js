import React from 'react';
import '../css/card.css';
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
 *      location="zoom uni"
 *      facebookLink="facebook.com" //Optional
 * />
 */
class EventCard extends React.Component {
    stringIsNotEmpty = text => text !== null && text !== "";

    render() {
        const {
            image, title, description, date, startTime, endTime,
            facebookLink, location
        } = this.props;

        // Use default image if no image provided
        const cardImg = image ? image : defaultImg;

        return(
            <div className="card-container card-container-hover">
                <a href={facebookLink}>
                    <img className="event-img" src={cardImg} alt={title} width='240px' height='140px'/>
                </a>
                <div className="event-content">
                    <h4 className="event-text event-title">{title}</h4>
                    <p className="event-text event-desc">{description}</p>
                    <div className="date-time-contaner event-desc">
                        <p className="event-text">When: {date} {startTime} - {endTime}</p>
                    </div>
                    <p className="event-text event-desc">{location}</p>
                </div>
            </div>
        )
    }
}

export default EventCard;