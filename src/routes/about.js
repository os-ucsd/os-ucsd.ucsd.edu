import React from "react";
import MenuBar from "../components/navbar";
import Typography from "@material-ui/core/Typography";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import Background from "../images/material-space/material-space4.jpeg";
import Footer from "../components/footer";

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
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h4" component="h1">
            Our Mission Statement
          </Typography>
          Open Source @ UCSD aims to build an all-inclusive open source community at UC San Diego. We strive to promote open source by engaging students through hosting education workshops,
          collaborative projects, and many other open source related events.
        </div>
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h4" component="h1">
            What We Do
          </Typography>
          
          Workshops

          Projects

          Events
        </div>
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h4" component="h1">
            How Do I Get Involved?
          </Typography>
          Open Source @ UCSD aims to build an all-inclusive open source community at UC San Diego. We strive to educate and spread awareness 
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
