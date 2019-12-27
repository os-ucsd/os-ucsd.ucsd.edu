import React from "react";
import MenuBar from "../components/navbar";
import "../assets/css/main.css";
import "../assets/css/tutorial-style.css";
import tutorialMeta from "./tutorials-meta.js";
import ReactMarkdown from 'react-markdown'
import Container from "react-bootstrap/Container"
import Background from "../images/space5.jpg";

var moment = require('moment');

class TutorialPage extends React.Component {

    //Required props: tutorialID
    constructor(props) {
        super(props);

        //Grab the passed in tutorial id
        const { tutorialID } = this.props.match.params

        this.state = {
            tutorialMeta: tutorialMeta,
            tutorialID: tutorialID,
            terms: null
        };
    }

    //Get the tutorial information from the md file and convert it to a string
    componentWillMount() {
        fetch(this.state.tutorialMeta[this.state.tutorialID]["content"]).then((response) => response.text()).then((text) => {
            this.setState({ terms: text })
        })
    }

    componentDidMount() {

    }

    render(){
        let tutorialData = this.state.tutorialMeta[this.state.tutorialID];
        return(
            <div>
                <MenuBar />

                {/*Banner*/}
                <section id="banner" style={{backgroundImage: `url(${Background})`, height: "20px"}}>
                    <div className="inner">
                        <div  className="content">
                            <h2>{tutorialData["title"]}</h2>
                            <h3 style={{marginTop: "2rem"}}>By: {tutorialData["authors"].name} (Github: {tutorialData["authors"].github})</h3>
                            <h3>Published: {moment(tutorialData['publish']).format("lll")}</h3>
                        </div>
                    </div>
                </section>

                <div style={{paddingTop:"2rem"}}>
                    <div style={{textAlign: "left", marginLeft: "10%", marginRight: "10%", marginTop: "5rem"}}>
                        <ReactMarkdown source={this.state.terms} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorialPage;