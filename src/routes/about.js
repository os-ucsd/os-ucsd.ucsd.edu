import React from "react";
import MenuBar from "./navbar";
import Typography from '@material-ui/core/Typography';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

const officers = [
  {
    name: 'Vivian',
    image:'https://content.fortune.com/wp-content/uploads/2019/01/boo.jpg',
    position: 'President',
    link: 'https://viviaann.github.io/',
    fun_fact: '',
    email: 'vyl003@ucsd.edu',
    github: 'https://github.com/Viviaann'
  },
  {
    name: 'Chau Vu',
    image:'https://i.pinimg.com/originals/8a/7b/5e/8a7b5e0d1b237ca10e006f0c986b5fe6.jpg',
    link: 'https://github.com/cqvu/os-ucsd.ucsd.edu',
    position: 'VP',
    fun_fact: '"I\'m a fun-sized, super nice guy"',
    email: 'chv004@ucsd.edu',
    github: 'https://github.com/cqvu'
  },
  {
    name: 'Brendan Lau',
    image:'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*',
    position: 'Project Chair',
    link: 'https://github.com/cqvu/os-ucsd.ucsd.edu',
    fun_fact: 'i luv jasmine',
    email: 'bwlau@ucsd.edu',
    github: 'https://github.com/blau0123'
  },
  {
    name: 'Brandon',
    image:'https://thespinoff.co.nz/wp-content/uploads/2019/03/GettyImages-139720130.jpg',
    position: 'Workshop Chair',
    link: 'https://github.com/cqvu/os-ucsd.ucsd.edu',
    fun_fact: '',
    email: 'test@ucsd.edu',
    github: ''
  },
  {
    name: 'Bao Hoang',
    image:'https://cdn1-www.dogtime.com/assets/uploads/2019/04/DogSilly.jpg',
    position: 'Event Chair',
    link: 'https://github.com/cqvu/os-ucsd.ucsd.edu',
    fun_fact: '',
    email: 'bghoang@ucsd.edu',
    github: 'https://github.com/bghoang'
  }
];

class About extends React.Component {
    constructor(props) {
      super(props);
      this.state={};
    };

    render() {
        return (
            <div>
            <main style={{marginTop:"200px"}}>
            <Typography variant="h2" component="h1"> 
              Meet the Board
            </Typography>
            <div style={{display:"flex", flexWrap:"wrap", flexGrow:0, flexShrink:0, alignItems:"normal", justifyContent:"flex-start", marginTop:"20px", marginLeft:"100px", marginRight:"100px"}}>
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
          </main>
          
            </div>

        )
    }

}

const Officer = (props) => {
    function over(e){
      e.target.width=280
      e.target.height=280
      e.target.style.opacity=1.0;
    }
    function out(e){
      e.target.width=300
      e.target.height=300
      e.target.style.opacity=0.9;
    }
  
    return (
      <div style={{boxSizing:"border-box", position:"relative", paddingLeft:"50px", paddingRight:"50px", paddingBottom:"5rem", flex:"0 0 33.3333%"}}>
        <a href={props.link} >
          <Image src={props.image} width={300} height={300} style={{opacity: 0.9}} onMouseOver={over} onMouseOut={out}/>
        </a>
        <Typography variant="h4" component="h2">
          {props.name}
        </Typography>
        <Typography color="textSecondary">
          {props.position}
        </Typography>
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
    )
}
  
export default About;
  