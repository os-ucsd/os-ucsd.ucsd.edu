import React from "react";
import "../css/main.css";
import image from '../images/octocat_flip.png';
import Emoji from '../components/emoji';
import Timeline from '../components/timeline/Timeline';
import getAllPRs from '../components/timeline/getTimelineData';
//import osLogo from '../images/os-logo-small.png'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            prs: []
        }
    }

    /**
     * Process for getting PR data
     * 1. Check local storage to see if we already have PR data from before
     * 2. If we have PR data and it isn't old (10 min), use that PR data
     * 3a. If we have not fetched the data before or the data is > 10 min old, call getAllPRs()
     * 3b. Call combineRepeats() to combine any PRs by the same person into one card
     */
    componentDidMount() {
        //localStorage.clear();
        const data = JSON.parse(localStorage.getItem("prs"));
        // if haven't gotten data before or if data is old, then retrieve the data again (every 10 min)
        if (!data || (data && new Date() - new Date(data.lastRetrieved) > 10 * 60 * 1000)) {
            // get the PR's to add to the timeline
            console.log("retrieving new data...");
            getAllPRs().then(res => {
                // only get the first 16 PRs
                res = res.slice(0, 18);
                console.log(res);
                const noRepeats = this.combineRepeats(res);
                this.setState({ prs: noRepeats });

                // store in local storage
                const dataToStore = {
                    data: noRepeats,
                    lastRetrieved: new Date()
                };
                localStorage.setItem("prs", JSON.stringify(dataToStore));
            });
        } else {
            // didn't need to call api, so just set state to stored data
            console.log("no new data", data.data);
            this.setState({ prs: data.data });
        }
    }

    /*
    When there are multiple PRs in a row by the same person to the same repo,
    combine the PRs into a single element
    */
    combineRepeats(prs) {
        let noRepeatPRs = [];
        for (let i = 0; i < prs.length; i++) {
            prs[i].allMergedDates = [prs[i].merged_time];
            let j = i + 1;
            while (
                j < prs.length &&
                prs[j].user === prs[i].user &&
                prs[j].repoName === prs[i].repoName
            ) {
                prs[i].allMergedDates.push(prs[j].merged_time);
                j++;
            }
            noRepeatPRs.push(prs[i]);
            // skip the repeats
            i = j - 1;
        }

        // make new array with only your contribution
        const yourContribution = [
            {
                user: "I",
                repoURL: "https://github.com/os-ucsd",
                repoName: "some repo",
                merged_time: ""
            }
        ];

        // concat norepeatPRs with this array so that this comes first
        const prsAndYours = yourContribution.concat(noRepeatPRs);
        return prsAndYours;
    }

    render() {
        return (
            <div>
                <header id="header">
                    <div className="star" id="star-1"></div>
                    <div className="star" id="star-2"></div>
                    <div className="star" id="star-3"></div>
                    <div className="star" id="star-4"></div>
                    <div className="star" id="star-5"></div>
                    <div className="star" id="star-6"></div>
                    <div className="star" id="star-7"></div>
                    <div className="star" id="star-8"></div>
                    <div className="star" id="star-9"></div>

                    <div className="image-header-container">
                        <div className="header-text">
                            <h1 id="header-title">Open Source @ UCSD</h1>
                            <h3 id="header-desc">{/*<img src={osLogo} className="oslogo" alt="oslogo" style={{ width: '90px' }} /> */}Join our open source community  </h3>
                        </div>
                        <img className="img" id='cat' src={image} alt="octocat" width="45%" />
                    </div>
                </header>

                <div className="home-content-container">
                    <div id="about">
                        <h1 className="section-title">What is open source? <Emoji symbol="🤔" /></h1>
                        <p className="sub-text">
                            If a program is open-source, its source code is freely available to its users. Its users – and anyone else – have the ability to take this source code, modify it,
                            and distribute their own versions of the program. The users also have the ability to distribute as many copies of the original program as they want. Anyone can
                            use the program for any purpose; there are no licensing fees or other restrictions on the software.
                        </p>
                        <h1 className="section-title">How to get involved? <Emoji symbol="😍" /></h1>
                        <p className="sub-text">
                            <strong><Emoji symbol="📅" />  Weekly meetings: </strong>
                            Weekly meetings for Winter 2020 are Tuesdays 5PM-7PM in Student Services Center 300 (check our Events page for the most accurate
                            time and location). Everyone is welcomed!
                        </p>
                        <p className="sub-text"><strong><Emoji symbol="📫" /> Stay up to date: </strong> Subscribe to our mailing list to get notified of our upcoming events. Stay up-to-date with us by joining our Facebook group and Discord channel!</p>
                        <p className="sub-text"><strong><Emoji symbol="💻" /> Join our projects team: </strong> Contribute to existing Open Source @ UCSD projects or come talk to us if you're interested in leading a project for Open Source!</p>
                        <p className="sub-text">
                            <strong><Emoji symbol="😎" /> Join our technical team: </strong>
                            Technical writing is an awesome way to share knowledge and strengthen your understanding of a topic. Whether it's writing a tutorial on a
                            technical topic you're passionate about, developing a workshop series on an open source technology, or giving a lightning talk, we would love to have your help!
                        </p>
                    </div>
                    <div id="home-timeline-container">
                        <h1 className="section-title">Our live GitHub contributions</h1>
                        <p className="sub-text">Check out some of the most recent contributions to our GitHub!</p>
                        {
                            this.state.prs && this.state.prs.length > 0 ? 
                                <Timeline prs={this.state.prs} />
                                : <h3>Loading...</h3>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home