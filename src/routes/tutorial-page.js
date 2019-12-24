import React from "react";
import MenuBar from "./navbar";
import "../../assets/css/main.css";
import "../../assets/css/tutorial-style.css";
import "../../assets/js/browser.min.js";
import tutorialMeta from "./tutorials-meta.js";
import Container from "react-bootstrap/Container"

var moment = require('moment');

class TutorialPage extends React.Component {

    //Required props: tutorialID
    constructor(props) {
        super(props);

        //Grab the passed in tutorial id
        const { tutorialID } = this.props.match.params

        this.state = {
            tutorialID: tutorialID
        };
    }

    componentDidMount() {

    }

    render(){

        return(
            <div>
                <h1>{this.state.tutorialID}</h1>
                <p>Tutorial Page</p>
            </div>
        );
    }
}

export default TutorialPage;