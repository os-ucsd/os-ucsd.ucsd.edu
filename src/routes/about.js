import React from "react"
import Header from '../components/header'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import Footer from '../components/footer'

import officers from '../data/officer-data';

import '../css/about.css';

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
                <div className="officer-outer-container">
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
                </div>
                <Footer />
            </div >
        )
    }
}

const Officer = props => {
    const {
        name, image, position, fun_fact, link,
        email, github
    } = props;

    return (
        <div className="officer-container">
            <a href={link}>
                <img src={image} className="officer-img"/>
            </a>
            <div className="officer-info">
                <h2>{name}</h2>
                <h4>{position}</h4>
                <p>{fun_fact}</p>
                <div className="officer-contact">
                    <a className="officer-link-icon" href={"mailto:" + email}>
                        <EmailIcon style={{ fill: "#314858", width: 25, height: 25 }} />
                    </a>
                    <a className="officer-link-icon" href={github}>
                        <GitHubIcon style={{ fill: "#314858", width: 25, height: 25 }} />
                    </a>
                </div>
            </div>
        </div>
    )
}

/*
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
*/

export default About