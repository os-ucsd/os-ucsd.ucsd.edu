import React from 'react';
import Header from "../components/header";
import EventCard from "../components/event-card";

import '../css/hacktoberfest.css';
import image from '../images/hacktoberfest_logo.png';

class Hacktoberfest extends React.Component {
    render() {
        const events = [{
            title: "Open Source and Higher Education",
            description: "Speaker: Erin Glass",
            date: "10/12/20",
            startTime: "6:30pm",
            endTime: "7:30pm",
            facebookLink: ""
        }, {
            title: "Open Source Project: Virtual Reef",
            description: "Speaker: Owen Pierce",
            date: "10/12/20",
            startTime: "6:30pm",
            endTime: "7:30pm",
            facebookLink: ""
        }, {
            title: "Alex talking smack",
            description: "Speaker: Alex Garcia",
            date: "10/12/20",
            startTime: "6:30pm",
            endTime: "7:30pm",
            facebookLink: ""
        }, {
            title: "Open Source and Higher Education",
            description: "Speaker: Erin Glass",
            date: "10/12/20",
            startTime: "6:30pm",
            endTime: "7:30pm",
            facebookLink: ""
        }]

        return(
            <div className="hacktoberfest-container">
                <Header />
                <img className="header-img" src={image} alt="hacktoberfest" width="100%" />
                <div className="hacktoberfest-header-text vert-centered">
                    <h3>OS @ UCSD x HacktoberFest</h3>
                    <p>What is Hacktoberfest</p>
                </div>
                <div className="body-content">
                    <div className="events vert-centered">
                        <h3>Guest Speakers and Workshops</h3>
                        <div className="events-list">
                            {
                                events.map(event => 
                                    <div className="event-card">
                                        <EventCard title={event.title}
                                            description={event.description} date={event.date}
                                            startTime={event.startTime} endTime={event.endTime} 
                                            facebookLink={event.facebookLink} />
                                    </div>
                                )
                            }
                            </div>
                    </div>
                    <div className="resources vert-centered">
                        <h3>hacktobefsdf resources yeah</h3>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Hacktoberfest;