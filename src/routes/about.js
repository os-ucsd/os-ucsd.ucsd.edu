import React from "react"
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
//import libmoji from 'libmoji'

import officers from '../data/officer-data';

import '../css/about.css';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div style={{ paddingTop: "100px" }}>
                {/* WHAT WE DO */}
                <div>
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

                <hr style={{ width: '90%', marginLeft: 'auto', marginRight: 'auto', marginTop: '35px', marginBottom: '50px', height: '1.5px', color: '#314858', background: '#314858' }}></hr>

                {/* MEET THE BOARD */}
                <h2 style={{ fontSize: "40px", textAlign: "center", padding: "10px" }}>Meet the Board</h2>
                <div className="officer-outer-container">
                    {officers.map(officer => (
                        <Officer
                            key={officer.name}
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
            </div >
        )
    }
}

const Officer = props => {
    const {
        name, image, position, fun_fact, link,
        email, github
    } = props;
    /*
    const data = {
        "name": "Chau",
        "gender": "female",
        "traits": {
            "brow": "768",
            "cheek_details": "-1",
            "eyelash": "-1",
            "eye_details": "939",
            "face_lines": "-1",
            "glasses": "954",
            "hair": "1260",
            "hat": "1178",
            "mouth": "1055",
            "nose": "1032",
            "blush_tone": "-1",
            "brow_tone": "0",
            "eyeshadow_tone": "-1",
            "hair_tone": "2039326",
            "lipstick_tone": "-1",
            "pupil_tone": "5977116",
            "skin_tone": "9655597",
            "body": "7",
            "breast": "3",
            "face_proportion": "2"
        },
        "outfit": "1017915"
    }

    const { gender, traits, outfit } = data;
    const bitmojiImage = libmoji.buildPreviewUrl("body", 4,
        gender === 'female' ? 2 : 1,
        4, 0,
        Object.keys(traits).map(k => [k, traits[k]]),
        outfit
    );*/

    return (
        <div className="officer-container">
            <a href={link}>
                <img src={image} className="officer-img" alt="officer" />
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
export default About