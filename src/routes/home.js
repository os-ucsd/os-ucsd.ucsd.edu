import React from "react";
import MenuBar from "../components/navbar";
import "../assets/css/main.css";
import Footer from "../components/footer";
import "../css/home.css";
import getAllPRs from "../timeline/getTimelineData";
import Timeline from "../timeline/Timeline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Background from "../images/material-space/material-space7.jpg";
// import UpcomingEvents from '../events/UpcomingEvents';
// import Button from '@material-ui/core/Button';
// import {Link} from 'react-router-dom';

// importing images
import mozilla from "../assets/css/images/mozilla.jpg";
import google from "../assets/css/images/google.jpg";
import facebook from "../assets/css/images/facebook.png";
import redhat from "../assets/css/images/redhat.png";
import twilio from "../assets/css/images/twilio.png";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prs: [],
      borgColor: "white"
    };

    this.checkIfBottom = this.checkIfBottom.bind(this);
  }

  isBottom(elt1, elt2) {
    // if the user scrolls to 60px above the banner (when the borg passes the banner)
    return (
      elt1.getBoundingClientRect().bottom <=
      elt2.getBoundingClientRect().top + 60
    );
  }

  checkIfBottom() {
    // add event listener for scroll to change borg color
    const borg = document.querySelector(".borg");
    const banner = document.querySelector("#banner");
    // if the user reaches bottom of banner, change to grey if not already
    if (this.isBottom(banner, borg)) {
      if (this.state.borgColor !== "grey") {
        this.setState({ borgColor: "grey" });
      }
    } else {
      // set borg to white if not at bottom of banner
      if (this.state.borgColor !== "white") {
        this.setState({ borgColor: "white" });
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.checkIfBottom);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkIfBottom);

    //localStorage.clear();
    const data = JSON.parse(localStorage.getItem("prs"));
    // if haven't gotten data before or if data is old, then retrieve the data again (every 10 min)
    if (
      !data ||
      (data && new Date() - new Date(data.lastRetrieved) > 10 * 60 * 1000)
    ) {
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
      console.log("no new data");
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

    /*
    let yourContribution = noRepeatPRs[noRepeatPRs.length - 1];
    yourContribution.user = "I";
    yourContribution.repoName = "some repository";
    noRepeatPRs.unshift(yourContribution);
    return noRepeatPRs;
    */
  }

  render() {
    // Menu.
    return (
      <div className="home-container">
        <div className="menu-items"></div>
        <div className="menu-bar">
          <MenuBar borgColor={this.state.borgColor} />
        </div>
        <div className="is-preload">
          {/*Banner*/}
          <section
            id="banner"
            style={{ backgroundImage: `url(${Background})`, height: "40em" }}
          >
            <div className="inner">
              <div className="content">
                <h1 style={{ fontWeight: "900" }}>Open Source @ UCSD</h1>
                <p>Join our open source community!</p>
              </div>
              <ul className="actions stacked">
                <li>
                  <a href="/about" className="button major">
                    <i className="fas fa-users"></i>
                    <span> Learn More!</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/os-ucsd" className="button major">
                    <i className="fab fa-github"></i>
                    <span> Find Us on Github!</span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/*   <div className="content image-circles">
                <div className="images">
                  <span>
                    <img src="https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="" />
                  </span>>
                </div>
    </div>*/}
          {/* <ul className="actions">
                  <li>
                    <a href="/" className="button">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="/" className="button">
                      Our Story
                    </a>
                  </li>
                  <li>
                    <a href="/" className="button">
                      Our Story
                    </a>
                  </li>
                </ul>*/}
          {/* TIMELINE & RESOURCES */}
          <Grid className="" container>
            <Grid item sm={12} md={8} className="leftsection">
              {/*Definition of Open Source*/}
              <section className="wrapper style1 subsection">
                <h2 className="gridHeaders">What is Open Source?</h2>
                <p>
                  If a program is open-source, its source code is freely
                  available to its users. Its users – and anyone else – have the
                  ability to take this source code, modify it, and distribute
                  their own versions of the program. The users also have the
                  ability to distribute as many copies of the original program
                  as they want. Anyone can use the program for any purpose;
                  there are no licensing fees or other restrictions on the
                  software.
                </p>
              </section>

              {/*Get Involved*/}
              <div
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  display: "inline-block"
                }}
              >
                <h2>How To Get Involved</h2>
                <div
                  style={{
                    wordWrap: "break-word",
                    width: "40rem",
                    textAlign: "center"
                  }}
                >
                  <div style={{ textAlign: "left", padding: "20px" }}>
                    <Typography variant="h5" component="h5">
                      👩‍💻 JOIN US AT OUR WEEKLY MEETINGS!
                    </Typography>
                    <p style={{ textAlign: "left" }}>
                      Weekly meetings for Winter 2020 are{" "}
                      <strong>
                        Tuesdays 5PM-7PM in Student Services Center 300{" "}
                      </strong>{" "}
                      (check our Events page for the most accurate time and
                      location). Everyone is welcomed!
                    </p>
                  </div>

                  <div style={{ textAlign: "left", padding: "20px" }}>
                    <Typography variant="h5" component="h5">
                      📬 STAY UP-TO-DATE WITH UPCOMING EVENTS
                    </Typography>
                    <a href="">Subscribe to our mailing list </a> to get
                    notified of our upcoming events. Stay up-to-date with us by
                    joining our
                    <a href="https://www.facebook.com/groups/OpenSourceUCSD/">
                      {" "}
                      Facebook group
                    </a>{" "}
                    and
                    <a href="https://discord.gg/YpfppWs"> Discord channel</a>!
                  </div>

                  <div style={{ textAlign: "left", padding: "20px" }}>
                    <Typography variant="h5" component="h5">
                      📔 CHECK OUT OUR TUTORIALS
                    </Typography>
                    Get your feet wet with open source by{" "}
                    <a href="/tutorials">
                      doing one of our beginner-friendly tutorials
                    </a>
                    .
                  </div>

                  <div style={{ textAlign: "left", padding: "20px" }}>
                    <Typography variant="h5" component="h5">
                      ⚒ JOIN OUR PROJECTS TEAM
                    </Typography>
                    <a href="/project">
                      Contribute to existing Open Source @ UCSD projects{" "}
                    </a>{" "}
                    or come talk to us if you're interested in leading a project
                    for Open Source!
                  </div>

                  <div style={{ textAlign: "left", padding: "20px" }}>
                    <Typography variant="h5" component="h5">
                      💻 JOIN OUR TECHNICAL TEAM
                    </Typography>
                    Technical writing is an awesome way to share knowledge and
                    strengthen your understanding of a topic. Whether it's
                    writing a tutorial on a technical topic you're passionate
                    about, developing a workshop series on an open source
                    technology, or giving a lightning talk, we would love to
                    have your help!
                  </div>

                  <div style={{ textAlign: "left", padding: "20px" }}>
                    <Typography variant="h5" component="h5" color="error">
                      📅 <a href="/event"> COME TO OUR NEXT EVENT! </a>
                    </Typography>
                  </div>
                </div>
              </div>

              {/*Open Source Resources*/}
              <section className="wrapper style1 subsection">
                <h2 className="gridHeaders">Open Source Resources</h2>
                <p className="resources">
                  Here are some organizations that promote open source
                  communities and provide resources to learn more about open
                  source and how to contribute! Some of these organizations also
                  have projects available for you to contribute to!
                </p>
                <div className="orgs content">
                  <a href="https://ossn.club/">
                    <img
                      className="org-img"
                      src={mozilla}
                      alt="mozilla"
                      width="150px"
                    />
                  </a>
                  <a href="https://opensource.google/">
                    <img
                      className="org-img"
                      src={google}
                      alt="google"
                      width="150px"
                    />
                  </a>
                  <a href="https://opensource.facebook.com/">
                    <img
                      className="org-img"
                      src={facebook}
                      alt="facebook"
                      width="150px"
                    />
                  </a>
                  <a href="https://community.redhat.com/software/">
                    <img
                      className="org-img"
                      src={redhat}
                      alt="redhat"
                      width="150px"
                    />
                  </a>
                  <a href="https://www.twilio.com/open-source">
                    <img
                      className="org-img"
                      src={twilio}
                      alt="twilio"
                      width="150px"
                    />
                  </a>
                </div>
              </section>

              {/*Open Source Resources*/}
              <section className="wrapper style1 subsection">
                <h2 className="gridHeaders">How you can start contributing:</h2>
              </section>
            </Grid>
            <Grid item sm={12} md={4} className="rightsection">
              <section className="wrapper timeline">
                <h2>Our Live Github Contribution Timeline</h2>
                <p>
                  Check out some of the most recent contributions to our GitHub!
                </p>
                <Timeline prs={this.state.prs} />
              </section>
            </Grid>
          </Grid>
          {/* EVENTS */}{" "}
          {/*
          <section className='wrapper events-container'>
            <h2>Upcoming Events</h2>
            <UpcomingEvents />
            <div className='events-btn-container'>
              <Link style={{textDecoration:'none'}} to='/event'><Button>View all events</Button></Link>
            </div>
          </section>

          <section id="two" className="wrapper style2">
            <div className="inner">
              <header className="major">
                <h2>Gravida nunc accumsan</h2>
                <p>
                  Ipsum quis semper consequat, sem nibh mattis arcu, quis
                  porttitor lorem justo in tellus. Aenean lacinia
                  <br />
                  interdum nisl felis et dui viverra, nec accumsan tempus quam
                  ultricies.
                </p>
              </header>
              <div className="features">
                <section>
                  <span className="icon solid major fa-tag"></span>
                  <h3>Quam adipiscing</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-camera-retro"></span>
                  <h3>Semper accumsan</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-cloud"></span>
                  <h3>Ipsum lorem magna</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-cube"></span>
                  <h3>Tempus sed mattis</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-file-alt"></span>
                  <h3>Odio fermentum</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
                <section>
                  <span className="icon solid major fa-plane"></span>
                  <h3>Risus et interdum</h3>
                  <p>
                    Feugiat lorem quis semper consequat, sem nibh mattis arcu,
                    amet porttitor lorem justo in cumsan quam ultricies magna
                    tempus.
                  </p>
                </section>
              </div>
              <footer className="major">
                <ul className="actions special">
                  <li>
                    <a href="/" className="button major">
                      More Features
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </section>

  
          <section id="four" className="wrapper style2 special">
            <div className="inner">
              <header>
                <h2>Sed vitae massa curabitur</h2>
                <p>
                  Ipsum quis semper consequat, sem nibh mattis arcu, quis
                  porttitor lorem justo in tellus. Aenean lacinia
                  <br />
                  interdum nisl felis et dui viverra, nec accumsan tempus quam
                  ultricies.
                </p>
              </header>
              <ul className="actions special">
                <li>
                  <a href="/" className="button primary major">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </section>

                  */}
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
