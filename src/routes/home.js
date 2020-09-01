import React from "react"
import "../css/main.css"
import image from '../images/octocat.png'
import Header from '../components/header'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <header id="header">
                    <div class="star" id="star-1"></div>
                    <div class="star" id="star-2"></div>
                    <div class="star" id="star-3"></div>
                    <div class="star" id="star-4"></div>
                    <div class="star" id="star-5"></div>
                    <div class="star" id="star-6"></div>
                    <div class="star" id="star-7"></div>
                    <div class="star" id="star-8"></div>
                    <div class="star" id="star-9"></div>

                    <div class="image-header-container">
                        <div class="header-text">
                            <h1 id="header-title">Open Source @ UCSD</h1>
                            <h4 id="header-desc">Join our open source community.</h4>
                        </div>
                        <img class="img" src={image} alt="octocat" width="45%" />
                    </div>
                </header>
                <div id="about">
                    <h1 class="section-title">What is open source?</h1>
                    <p class="sub-text">
                        If a program is open-source, its source code is freely available to its users. Its users – and anyone else – have the ability to take this source code, modify it,
                        and distribute their own versions of the program. The users also have the ability to distribute as many copies of the original program as they want. Anyone can
                        use the program for any purpose; there are no licensing fees or other restrictions on the software.
                    </p>
                    <h1 class="section-title">How to get involved.</h1>
                    <p class="sub-text">
                        <strong>Weekly meetings.</strong> Weekly meetings for Winter 2020 are Tuesdays 5PM-7PM in Student Services Center 300 (check our Events page for the most accurate
            time and location). Everyone is welcomed!
                    </p>
                    <p class="sub-text"><strong>Stay up to date.</strong> Subscribe to our mailing list to get notified of our upcoming events. Stay up-to-date with us by joining our Facebook group and Discord channel!</p>
                    <p class="sub-text"><strong>Join our projects team.</strong> Contribute to existing Open Source @ UCSD projects or come talk to us if you're interested in leading a project for Open Source!</p>
                    <p class="sub-text"><strong>Join our technical team.</strong> Technical writing is an awesome way to share knowledge and strengthen your understanding of a topic. Whether it's writing a tutorial on a
            technical topic you're passionate about, developing a workshop series on an open source technology, or giving a lightning talk, we would love to have your help!</p>
                </div>
            </div>
        )
    }
}

export default Home