import React from "react";
import "../css/tutorial.css";
import tutorialData from "../data/tutorial-data.js";
import Header from "./header"
import ReactMarkdown from "react-markdown";
import Moment from 'react-moment';

class TutorialComponent extends React.Component {
    //Required props: tutorialID
    constructor(props) {
        super(props);

        //Grab the passed in tutorial id
        const { tutorialID } = this.props.match.params;

        this.state = {
            tutorialData: tutorialData,
            tutorialID: tutorialID,
            terms: null
        };
    }

    //Get the tutorial information from the md file and convert it to a string
    componentWillMount() {
        fetch(this.state.tutorialData[this.state.tutorialID]["content"])
            .then(response => response.text())
            .then(text => {
                this.setState({ terms: text });
            });
    }

    componentDidMount() { }

    render() {
        let tutorialInfo = this.state.tutorialData[this.state.tutorialID];
        return (
            <div>
                <Header />
                <section style={{ marginTop: "100px", textAlign: "center", paddingBottom: '0x' }}>

                    <h2 >{tutorialInfo["title"]}</h2>
                    <h3 style={{ marginTop: "2rem" }}>
                        By: {tutorialInfo["authors"].name} (Github:{" "}
                        {tutorialInfo["authors"].github})
                            </h3>
                    <h3>
                        Published: <Moment date={tutorialInfo["publish"]} />
                    </h3>

                </section>

                <div style={{ paddingTop: "10px" }}>
                    <div
                        style={{
                            textAlign: "left",
                            marginLeft: "10%",
                            marginRight: "10%",
                            marginTop: "2rem",
                            marginBottom: "5rem"
                        }}
                    >
                        <ReactMarkdown source={this.state.terms} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TutorialComponent;