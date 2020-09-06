import React from 'react';
import '../css/card.css';
import defaultImg from '../images/events-imgs/default.jpg';

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
            image, title, description, linkText, link, size
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
            <div className="card-container container-with-link" style={{
                height: height + "px",
                width: width + "px"
            }}>
                <img className="event-img" src={cardImg} alt={title} width={width + "px"} height={imgHeight + "px"}/>
                <div className="event-content">
                    <h4 className="event-text event-title" style={{ fontSize: titleFontSize + "px" }}>
                        {title}
                    </h4>
                    <p className="event-text event-desc" style={{ fontSize: descFontSize + "px" }}>
                        {description}
                    </p>
                    <a className="link" href={link} style={{ fontSize: descFontSize + "px" }}>
                        {linkText}
                    </a>
                </div>
            </div>
        )
    }
}

export default CardWithLink;