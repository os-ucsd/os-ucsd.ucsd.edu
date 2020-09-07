import React from 'react';
import '../css/card.css';
import defaultImg from '../images/events-imgs/default.jpg';

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
 *      size="sm/md/lg"
 *      facebookLink="facebook.com" //Optional
 * />
 */
class EventCard extends React.Component {
    stringIsNotEmpty = text => text !== null && text !== "";

    render() {
        const {
            image, title, description, date, startTime, endTime,
            facebookLink, location, size
        } = this.props;

        // Use default image if no image provided
        const cardImg = image ? image : defaultImg;

        // Determining sizes and font sizes (default is small)
        const width = size === "sm" ? 240 :
            size === "md" ? 340 :
            size === "lg" ? 440 : 240;
        const height = size === "sm" ? 300 :
            size === "md" ? 400 :
            size === "lg" ? 500 : 300;
        const imgHeight = width / 1.7;

        const titleFontSize = size === "sm" ? 15 :
            size === "md" ? 18 :
            size === "lg" ? 20 :15;
        const descFontSize = size === "sm" ? 12 :
            size === "md" ? 15 :
            size === "lg" ? 18 : 12;

        return(
            <div className="card-container card-container-hover" style={{
                height: height + "px",
                width: width + "px"
            }}>
                <a href={facebookLink} className="facebook-event-link">
                    <img className="event-img" src={cardImg} alt={title} width={width + "px"} height={imgHeight + "px"}/>
                    <div className="event-content" style={{width: width}}>
                        <h4 className="event-text event-title" style={{
                            fontSize: titleFontSize + "px"
                        }}>{title}</h4>
                        <p className="event-text event-desc" style={{
                            fontSize: descFontSize + "px"
                        }}>{description}</p>
                        <div className="date-time-contaner event-desc" style={{
                            fontSize: descFontSize + "px"
                        }}>
                            <p className="event-text"><strong>When: </strong>{date} {startTime} - {endTime}</p>
                        </div>
                        <p className="event-text event-desc" style={{
                            fontSize: descFontSize + "px"
                        }}><strong>Where: </strong>{location}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default EventCard;