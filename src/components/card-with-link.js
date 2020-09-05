import React from 'react';
import '../css/card.css';
import defaultImg from '../events/events-imgs/default.jpg';

/**
 * Used when want cards that have a link at the bottom (such as "LEARN MORE")
 * <CardWithLink
 *      image={image}
 *      title="Some title"
 *      description="Some description"
 *      linkText="LEARN MORE"
 *      link="os-ucsd@ucsd.edu"
 * />
 */
class CardWithLink extends React.Component {
    render() {
        const {
            image, title, description, linkText, link
        } = this.props;

        // Use default image if no image provided
        const cardImg = image ? image : defaultImg;

        return(
            <div className="card-container container-with-link">
                <img className="event-img" src={cardImg} alt={title} width='240px' height='140px'/>
                <div className="event-content">
                    <h4 className="event-text event-title">{title}</h4>
                    <p className="event-text event-desc">{description}</p>
                    <a className="link" href={link}>{linkText}</a>
                </div>
            </div>
        )
    }
}

export default CardWithLink;