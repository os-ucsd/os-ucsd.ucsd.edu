import React from 'react';
import EventCard from "../components/event-card";

import '../css/hacktoberfest.css';
import logo from '../images/hacktoberfest_logo.png';
import gettingStartedIcon from '../images/icons/faq-icons/getting_started_icon.svg';
import tutorialIcon from '../images/icons/faq-icons/tutorial_icon.svg';
import otherProjectsIcon from '../images/icons/faq-icons/other_projects_icon.svg'
import helpIcon from '../images/icons/faq-icons/help_icon.svg';

import { guestSpeakers, contributhons } from "../data/hacktoberfest-data";

class Hacktoberfest extends React.Component {
    render() {
        return (
            <div className="hacktoberfest-container">
                <img className="header-img" src={logo} alt="hacktoberfest" width="100%" />
                <div className="hacktoberfest-header-text vert-centered">
                    <h3 className="title-text">OS @ UCSD x HacktoberFest</h3>
                    <p className="desc-text vert-centered-text">
                        Hacktoberfest encourages participation in the open source community, which grows bigger every year. Complete the 2020 challenge and earn a limited edition T-shirt. Hacktoberfest is open to everyone in our global community. Whether you’re new to development, a student, long-time contributor, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skills levels are encouraged to complete the challenge.
                    </p>
                </div>
                <div className="body-content">
                    <div className="events vert-centered">
                        <h3 className="title-text">Guest Speakers and Workshops</h3>
                        <div className="events-list">
                            {
                                guestSpeakers.map(event =>
                                    <div className="event-card">
                                        <EventCard title={event.title}
                                            description={event.description} date={event.date}
                                            startTime={event.startTime} endTime={event.endTime}
                                            facebookLink={event.facebookLink}
                                            size="sm"
                                            location={event.location} />
                                    </div>
                                )
                            }
                        </div>
                        <h3 className="title-text">Contributhons</h3>
                        <div className="events-list">
                            {
                                contributhons.map(event =>
                                    <div className="event-card">
                                        <EventCard title={event.title}
                                            description={event.description} date={event.date}
                                            startTime={event.startTime} endTime={event.endTime}
                                            facebookLink={event.facebookLink}
                                            size="sm"
                                            location={event.location} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="resources vert-centered">
                        <h3 className="title-text vert-centered">Frequently Asked Questions</h3>
                        <div className="faq">
                            <div className="icon-faq-container">
                                <img src={gettingStartedIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Getting Started</h4>
                                    <p className="faq-answer">
                                        You can read more about the event at the official <a href="https://hacktoberfest.digitalocean.com/">HacktoberFest website</a>.
                                        You can also familiarize yourself with or freshen up on your git skills with our git cheatsheet.
                                    </p>
                                </div>
                            </div>

                            <div className="icon-faq-container">
                                <img src={tutorialIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Beginner Friendly Tutorials</h4>
                                    <div className="faq-answer">
                                        <p>If you're new to contributing to open source projects, feel free to follow these tutorials to get started!</p>
                                        <p>Graffiti Wall: <a href="https://paper.dropbox.com/doc/GIT-GUD-Graffiti-Wall-Tutorial-O0IedwD2H2kAM7ZT8y5NI">
                                            https://paper.dropbox.com/doc/GIT-GUD-Graffiti-Wall-Tutorial-O0IedwD2H2kAM7ZT8y5NI</a>
                                        </p>
                                        <p>Bitmoji: <a href="https://bitmoji-tutorial.glitch.me/">https://bitmoji-tutorial.glitch.me/</a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="icon-faq-container">
                                <img src={otherProjectsIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Other Open Source Projects</h4>
                                    <p className="faq-answer">
                                        You can visit our <a href="https://github.com/os-ucsd">GitHub repo</a> to find some open source projects you can contribute to, such as Workshop Facilitator and OS Marketplace. Stay tuned for an extensive list of beginner friendly projects 😊!
                                    </p>
                                </div>
                            </div>

                            <div className="icon-faq-container">
                                <img src={helpIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Getting Help</h4>
                                    <p className="faq-answer">
                                        We're available on <a href="https://discord.gg/zccEYC">Discord</a> to answer any technical and non-technical questions you may have! You can also visit the <a href="/contact">Contact</a> page to send us an email.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hacktoberfest;