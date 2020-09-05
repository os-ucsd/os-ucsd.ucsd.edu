import React from 'react';
import Header from "../components/header";
import EventCard from "../components/event-card";

import '../css/hacktoberfest.css';
import image from '../images/hacktoberfest_logo.png';

class Hacktoberfest extends React.Component {
    render() {
        return(
            <div className="hacktoberfest-container">
                <Header />
                <img className="header-img" src={image} alt="hacktoberfest" width="100%" />
                <div className="header-text vert-centered">
                    <h3>OS @ UCSD x HacktoberFest</h3>
                    <p>What is Hacktoberfest</p>
                </div>
                <div className="body-content">
                    <div className="events vert-centered">
                        <h3>hacktoberfet events yeah</h3>
                        <EventCard title="Open Source and Higher Education"
                            description="Speaker: Erin Glass" date="10/12/20"
                            startTime="6:30pm" endTime="7:30pm" facebookLink="" />
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