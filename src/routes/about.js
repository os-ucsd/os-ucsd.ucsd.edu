import React from "react";
import MenuBar from "../components/navbar";
import Typography from "@material-ui/core/Typography";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import Background from "../images/material-space/material-space4.jpeg";
import Footer from "../components/footer";
import Card from "react-bootstrap/Card";

const officers = [
  {
    name: "Vivian Lee",
    image: "https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg",
    position: "President",
    link: "https://viviaann.github.io/",
    fun_fact: "",
    email: "vyl003@ucsd.edu",
    github: "https://github.com/Viviaann"
  },
  {
    name: "Chau Vu",
    image:
      "https://i.pinimg.com/originals/8a/7b/5e/8a7b5e0d1b237ca10e006f0c986b5fe6.jpg",
    link: "https://github.com/cqvu/os-ucsd.ucsd.edu",
    position: "VP",
    fun_fact: '"i\'m a fun-sized, super nice guy"',
    email: "chv004@ucsd.edu",
    github: "https://github.com/cqvu"
  },
  {
    name: "Brendan Lau",
    image:
      "https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*",
    position: "Project Chair",
    link: "https://github.com/cqvu/os-ucsd.ucsd.edu",
    fun_fact: '"it\'s everyday bro, do you give up at night?"',
    email: "bwlau@ucsd.edu",
    github: "https://github.com/blau0123"
  },
  {
    name: "Brandon Foey",
    image:
      "https://thespinoff.co.nz/wp-content/uploads/2019/03/GettyImages-139720130.jpg",
    position: "Workshop Chair",
    link: "https://github.com/cqvu/os-ucsd.ucsd.edu",
    fun_fact: "",
    email: "test@ucsd.edu",
    github: ""
  },
  {
    name: "Bao Hoang",
    image: "https://cdn1-www.dogtime.com/assets/uploads/2019/04/DogSilly.jpg",
    position: "Event Chair",
    link: "https://github.com/cqvu/os-ucsd.ucsd.edu",
    fun_fact: '"I have good personality"',
    email: "bghoang@ucsd.edu",
    github: "https://github.com/bghoang"
  }
];

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MenuBar></MenuBar>
        {/*Banner*/}
        <section
          id="banner"
          style={{ backgroundImage: `url(${Background})`, height: "20px" }}
        >
          <div className="inner">
            <div className="content">
              <h2>About Us</h2>
            </div>
          </div>
        </section>
        <div style={{ marginTop: "20px", textAlign:"center", display:"inline-block"}}>
          <Typography variant="h4" component="h1">
            What We Do
          </Typography>
          <p style={{ marginTop: "20px", wordWrap: "break-word", width: "80rem"}}>
          Open Source @ UCSD aims to build an all-inclusive open source community at UC San Diego.
          We strive to promote open source by engaging students through hosting educational workshops,
          collaborative projects, and many other open source related events.
          </p>
        </div>
        <div style={{ marginTop: "20px", display:"flex", justifyContent: "space-evenly"}}>

          
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn2.iconfinder.com/data/icons/web-set-2/50/73-512.png" />
            <Card.Body>
              <Card.Title>Workshops</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://c7.uihere.com/icons/814/431/621/project-def27d0e5986e95b9ffbaeec04f8984e.png" />
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/5a/c7/d5/5ac7d5d80f89e1d5c3e30175e7f4d274.png" />
            <Card.Body>
              <Card.Title>Events</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginTop: "20px", textAlign:"center", display:"inline-block" }}>
          <Typography variant="h4" component="h1">
            How To Get Involved
          </Typography>
          <div style={{ wordWrap: "break-word", width: "40rem", textAlign:"center", }}>
            
            <div style={{ textAlign:"left", padding:"20px"}}>
              <Typography variant="h5" component="h5">
              👩‍💻 JOIN US AT OUR WEEKLY MEETINGS!
              </Typography>
              Weekly meetings for Winter 2020 are <strong>Tuesdays 5PM-7PM in Student Services Center 300 </strong> (check Facebook for location changes). Everyone is welcomed!
            </div>
            
            <div style={{ textAlign:"left", padding:"20px"}}>
              <Typography variant="h5" component="h5">
              📬 STAY UP-TO-DATE WITH UPCOMING EVENTS
              </Typography>
              <a href="">Subscribe to our mailing list </a> to get notified of our upcoming events. Stay up-to-date with us by joining our <a href="">Facebook group</a> and <a href="">Discord channel</a>!
            </div>

            <div style={{ textAlign:"left", padding:"20px"}}>
              <Typography variant="h5" component="h5">
              📔 CHECK OUT OUR TUTORIALS
              </Typography>
              Get your feet wet with open source by <a href="/tutorials">doing one of our beginner-friendly tutorials</a>.
            </div>

            <div style={{ textAlign:"left", padding:"20px"}}>
              <Typography variant="h5" component="h5">
              ⚒ JOIN OUR PROJECTS TEAM
              </Typography>
              <a href="/project">Contribute to existing Open Source @ UCSD projects </a> or come talk to us if you're interested in leading a project for Open Source!
            </div>
            
            <div style={{ textAlign:"left", padding:"20px"}}>
              <Typography variant="h5" component="h5">
              💻 JOIN OUR TECHNICAL TEAM
              </Typography> 
              Technical writing is an awesome way to share knowledge and strengthen your understanding of a topic. Whether it's writing a tutorial on a technical topic you're
              passionate about, developing a workshop series on an open source technology, or giving a lightning talk, we would love to have your help!
            </div>
            
            <div style={{ textAlign:"left", padding:"20px"}}>
              <Typography variant="h5" component="h5" color="error">
              📅 <a href="/event"> COME TO OUR NEXT EVENT! </a>
              </Typography>
            </div>

          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h4" component="h1">
            Meet the Board
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexGrow: 0,
              flexShrink: 0,
              alignItems: "normal",
              justifyContent: "flex-start",
              marginTop: "20px",
              marginLeft: "100px",
              marginRight: "100px"
            }}
          >
            <Row>
              {officers.map(officer => (
                <Officer
                  name={officer.name}
                  image={officer.image}
                  position={officer.position}
                  fun_fact={officer.fun_fact}
                  link={officer.link}
                  email={officer.email}
                  github={officer.github}
                />
              ))}
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const Officer = props => {
  function over(e) {
    e.target.width = 280;
    e.target.height = 280;
    e.target.style.opacity = 1.0;
  }
  function out(e) {
    e.target.width = 300;
    e.target.height = 300;
    e.target.style.opacity = 0.9;
  }

  return (
    <div
      style={{
        boxSizing: "border-box",
        position: "relative",
        paddingLeft: "50px",
        paddingRight: "50px",
        paddingBottom: "5rem",
        flex: "0 0 33.3333%"
      }}
    >
      <a href={props.link}>
        <Image
          src={props.image}
          width={300}
          height={300}
          style={{ opacity: 0.9, objectFit: "cover" }}
          onMouseOver={over}
          onMouseOut={out}
        />
      </a>
      <Typography variant="h4" component="h2">
        {props.name}
      </Typography>
      <Typography color="textSecondary">{props.position}</Typography>
      <Typography variant="body2" component="p">
        {props.fun_fact}
      </Typography>
      <a href={"mailto:" + props.email}>
        <EmailIcon></EmailIcon>
      </a>
      <a href={props.github}>
        <GitHubIcon></GitHubIcon>
      </a>
    </div>
  );
};

export default About;
