import React from "react"
import Header from '../components/header'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import Footer from '../components/footer'

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
        email: "bfoey@ucsd.edu",
        github: "https://github.com/BrandonFoey"
    },
    {
        name: "Bao Hoang",
        image: "https://cdn1-www.dogtime.com/assets/uploads/2019/04/DogSilly.jpg",
        position: "Event Chair",
        link: "https://github.com/cqvu/os-ucsd.ucsd.edu",
        fun_fact: '"I have a good personality"',
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
                <Header />

                {/* WHAT WE DO */}
                <div style={{ marginTop: "100px" }}>
                    <h2 style={{ fontSize: "40px", textAlign: "center", padding: "10px" }}>What We Do</h2>
                    <p style={{
                        marginTop: "10px", fontSize: "20px", display: 'block', overflow: 'auto',
                        width: "900px", maxWidth: '900px', margin: '0 auto'
                    }}>
                        Open Source @ UCSD aims to build an all-inclusive open source
                        community at UC San Diego. We strive to promote open source by
                        engaging students through educational workshops, collaborative
                        projects, and many other open source related events.
                    </p>
                </div>

                {/* MEET THE BOARD */}
                <h2 style={{ fontSize: "40px", textAlign: "center", padding: "10px" }}>Meet the Board</h2>
                <Grid container spacing={1.5}>
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
                </Grid>
                <Footer />
            </div >
        )
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
                paddingLeft: "40px",
                paddingRight: "40px",
                paddingBottom: "5rem",
                flex: "0 0 33.3333%"
            }}
        >
            <a href={props.link}>
                <CardMedia
                    src={props.image}
                    component="img"
                    width={300}
                    height={300}
                    style={{ opacity: 0.9, objectFit: "cover" }}
                    onMouseOver={over}
                    onMouseOut={out}
                    title="Members"
                />
            </a>
            <Typography variant="h3" component="h2">
                {props.name}
            </Typography>
            <Typography color="textSecondary" variant="h4">{props.position}</Typography>
            <Typography variant="h5" component="p">
                {props.fun_fact}
            </Typography>
            <a href={"mailto:" + props.email}>
                <EmailIcon style={{ fill: "gray", width: 30, height: 30 }} />
            </a>
            <a href={props.github}>
                <GitHubIcon style={{ fill: "gray", width: 30, height: 30 }} />
            </a>
        </div>
    );
};

export default About