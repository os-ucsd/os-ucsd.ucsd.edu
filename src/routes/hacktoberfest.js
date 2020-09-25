import React from 'react';
import EventCard from "../components/event-card";

import '../css/hacktoberfest.css';
import logo from '../images/hacktoberfest_logo.png';
import defaultImg from '../images/events-imgs/default.jpg';
import registerIcon from '../images/icons/faq-icons/register_icon.svg';
import gettingStartedIcon from '../images/icons/faq-icons/getting_started_icon.svg';
import tutorialIcon from '../images/icons/faq-icons/tutorial_icon.svg';
import otherProjectsIcon from '../images/icons/faq-icons/other_projects_icon.svg'
import helpIcon from '../images/icons/faq-icons/help_icon.svg';

import { guestSpeakers, contributathons } from "../data/hacktoberfest-data";

class Hacktoberfest extends React.Component {
    render() {
        return (
            <div className="hacktoberfest-container">
                <img className="header-img" src={logo} alt="hacktoberfest" width="100%" />
                <div className="hacktoberfest-header-text vert-centered">
                    <h2 className="title-text">What is Hacktoberfest? <span role="img" aria-label="ghost">👻</span></h2>
                    <div className="desc-text vert-centered-text">
                        <p>Hacktoberfest is a month long virtual event to celebrate the open source community and encourage open source contributions by Digital Ocean and DEV.
                        During the month of October 2020, you can earn a limited Hacktoberfest 2020 edition t-shirt by making 4 pull requests to any repository (make sure to follow the contribution guidelines for the pull request to count). This is a great opportunity to explore the world of Open Source!
                        </p>
                        <p>Read more about Hacktoberfest 2020 here <span role="img" aria-label="point-right">👉</span> <a href="https://hacktoberfest.digitalocean.com/">https://hacktoberfest.digitalocean.com/</a></p>
                    </div>
                </div>
                <div className="body-content">
                    <div className="events vert-centered">
                        <h2 className="title-text">OS@UCSD X Hacktoberfest</h2>
                        <h3 className="subtitle-text">Guest Speakers and Workshops</h3>
                        <div className="events-list">
                            {
                                guestSpeakers.map(event =>
                                    <div className="event-card">
                                        <EventCard title={event.title}
                                            image={event.imageUrl ? event.imageUrl : defaultImg}
                                            description={event.description} date={event.date}
                                            startTime={event.startTime} endTime={event.endTime}
                                            facebookLink={event.facebookLink}
                                            size="sm"
                                            location={event.location} />
                                    </div>
                                )
                            }
                        </div>
                        <h3 className="subtitle-text">Contributathons</h3>
                        <div className="events-list">
                            {
                                contributathons.map(event =>
                                    <div className="event-card">
                                        <EventCard title={event.title}
                                            image={event.imageUrl ? event.imageUrl : defaultImg}
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
                        <h2 className="title-text vert-centered">How Do I Get Involved?</h2>
                        <div className="faq">
                            <div className="icon-faq-container">
                                <img src={registerIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Register for Hacktoberfest</h4>
                                    <p className="faq-answer">
                                        Read more about the event at the official <a href="https://hacktoberfest.digitalocean.com/">HacktoberFest website</a>.
                                        Make sure you register for Hacktoberfest with the official hacktoberfest website for your pull requests to count towards your prize.
                                    </p>
                                </div>
                            </div>
                            <div className="icon-faq-container">
                                <img src={gettingStartedIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Learn about Open Source & How To Make a Pull Request </h4>
                                    <div className="faq-answer">
                                        <p>Check out these resources to help you learn more about open source:</p>
                                        <p><a href="https://www.digitalocean.com/community/tutorial_series/an-introduction-to-open-source">Introduction To Open Source - Digital Ocean</a></p>
                                        <p><a href="https://github.com/freeCodeCamp/how-to-contribute-to-open-source">How to Contribute to Open Source - FreeCodeCamp</a></p>
                                        <p><a href="https://www.twilio.com/quest/learn/open-source">Twilio Quest (educational RPG Game) - Twilio</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="icon-faq-container">
                                <img src={tutorialIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Make Your First Pull Request - Beginner Friendly Tutorials</h4>
                                    <div className="faq-answer">
                                        <p>Haven’t made a contribution? Not familiar with Git? Here are some projects made by Open Source @ UCSD that walk you through the process of making a contribution!</p>
                                        <p>Tag our graffiti wall: <a href="http://os-ucsd.ucsd.edu/tutorial/Graffiti-Wal">
                                            http://os-ucsd.ucsd.edu/tutorial/Graffiti-Wal</a>
                                        </p>
                                        <p>Bitmoji: <a href="http://os-ucsd.ucsd.edu/tutorial/Bitmoji">http://os-ucsd.ucsd.edu/tutorial/Bitmoji</a></p>

                                        <p>Be sure to come to our workshops and contributathons for more resources and help!</p>

                                    </div>
                                </div>
                            </div>

                            <div className="icon-faq-container">
                                <img src={otherProjectsIcon} className="icon" alt="icon" />
                                <div className="faq-content">
                                    <h4 className="faq-question">Keep Contributing!</h4>
                                    <div className="faq-answer">
                                        <p>In order to earn the free limited edition Hacktoberfest 2020 t-shirt, you must have 4 approved pull requests.</p>
                                        <p>Here are a few beginner friendly projects:</p>
                                        <p><a href="https://github.com/aionthebeach/virtual-reef">Virtual Reef</a></p>
                                        <p><a href="https://github.com/os-ucsd/actions">OS@UCSD’s Github Actions</a></p>
                                        <p><a href="https://github.com/mungell/awesome-for-beginners">Awesome For Beginners</a></p>
                                        <p><a href="https://firstcontributions.github.io/">First Contributions</a></p>

                                        <p>If you’re a bit more comfortable, check out other open source projects that could use your help:</p>
                                        <p><a href="https://gauger.io/contrib/">Contrib</a></p>
                                        <p><a href="http://issuehub.io/">IssueHub</a></p>

                                        <p>You can earn even MORE swags through other companies participating in Hacktoberfest!
                                            Checkout the <a href="https://github.com/crweiner/hacktoberfest-swag-list">Hacktoberfest Swag List</a></p>

                                        <p>The fun doesn’t stop at 4 pull requests, keep making contributions and getting involved in the open source community <span role="img" aria-label="smiley">😃</span></p>
                                    </div>
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