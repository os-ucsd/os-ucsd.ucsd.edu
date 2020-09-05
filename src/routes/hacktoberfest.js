import React from 'react';
import Header from "../components/header";
import Footer from "../components/footer";
import EventCard from "../components/event-card";

import '../css/hacktoberfest.css';
import image from '../images/hacktoberfest_logo.png';
import gettingStartedIcon from '../images/getting_started_icon.svg';
import tutorialIcon from '../images/tutorial_icon.svg';
import otherProjectsIcon from '../images/other_projects_icon.svg'
import helpIcon from '../images/help_icon.svg';

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
                    <h3 className="title-text">OS @ UCSD x HacktoberFest</h3>
                    <p className="desc-text vert-centered-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="body-content">
                    <div className="events vert-centered">
                        <h3 className="title-text">Guest Speakers and Workshops</h3>
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
                        <h3 className="title-text">Contributhons</h3>
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
                        <h3 className="title-text vert-centered">Frequently Asked Questions</h3>
                        <div className="faq">
                            <div className="icon-faq-container">
                                <img src={gettingStartedIcon} className="icon"/>
                                <div className="faq-content">
                                    <h4 className="faq-question">Getting Started</h4>
                                    <p className="faq-answer">
                                        You can read more about the event at the official <a href="https://hacktoberfest.digitalocean.com/">HacktoberFest website</a>.
                                        You can also familiarize or freshen up on your git skills with our git cheatsheet.
                                    </p>
                                </div>
                            </div>

                            <div className="icon-faq-container">
                                <img src={tutorialIcon} className="icon"/>
                                <div className="faq-content">
                                    <h4 className="faq-question">Beginner Friendly Tutorials</h4>
                                    <div className="faq-answer">
                                        <p>We have sum tuts that you can follow to get started with contributing to open source projects brah. </p>
                                        <p>Graffiti Wall: <a href="https://paper.dropbox.com/doc/GIT-GUD-Graffiti-Wall-Tutorial-O0IedwD2H2kAM7ZT8y5NI">
                                            https://paper.dropbox.com/doc/GIT-GUD-Graffiti-Wall-Tutorial-O0IedwD2H2kAM7ZT8y5NI</a>
                                        </p>
                                        <p>Bitmoji: <a  href="https://bitmoji-tutorial.glitch.me/">https://bitmoji-tutorial.glitch.me/</a></p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="icon-faq-container">
                                <img src={otherProjectsIcon} className="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Other Open Source Projects</h4>
                                    <p className="faq-answer">You can visit our GitHub repo to find some open source projects. </p>
                                </div>
                            </div>

                            <div className="icon-faq-container">
                                <img src={helpIcon} className="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Getting Help</h4>
                                    <p className="faq-answer">You can contact us through Discord (ay yo discord linku) or through our email (go to contact pg or email @ucsd.edu)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
} 

export default Hacktoberfest;