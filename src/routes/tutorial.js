import React from "react"
import tutorialData from "../data/tutorial-data.js";
import Emoji from "../components/emoji"
import Moment from 'react-moment';
import "../css/tutorial.css";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorialData: tutorialData,
            showingTutorial: false,
            currentTutorialFile: "",
            body: null
        };
        this.openTutorial = this.openTutorial.bind(this);
    }

    openTutorial(tutorial) {
        this.props.history.push("/tutorial/" + tutorial["url"]);
    }

    render() {
        let tutorialCards = [];

        //Create a card for each tutorial in the meta file
        tutorialCards = Object.keys(this.state.tutorialData).map(key => {
            let tutorial = this.state.tutorialData[key];
            return (
                <section
                    className="tutorialBox"
                    key={tutorial.url}
                    onClick={() => {
                        this.openTutorial(tutorial);
                    }}
                    style={{
                        width: '350px', margin: '10px', borderRadius: '25px', border: '#999 solid 1px'
                    }}
                >
                    <LibraryBooksIcon fontSize="large" style={{
                        textAlign: 'center',
                        display: 'block', width: '100%', marginTop: '5px'
                    }} />

                    <h3 style={{ textAlign: 'center', minHeight: "10rem", paddingTop: "0.5rem" }}>
                        {tutorial["title"]}
                    </h3>
                    <p style={{ textAlign: 'center' }}>By: {tutorial["authors"].name}</p>
                    <p style={{ textAlign: 'center', fontSize: '12px' }}>Published: <Moment date={tutorial['publish']} /> </p>
                </section >
            );
        });

        return (
            <div style={{ paddingTop: "100px" }}>
                <h2 style={{ fontSize: "40px", textAlign: "center", padding: "10px" }}>All Tutorials</h2>

                <div className="tutorialList">{tutorialCards}</div>
                <h3 style={{ textAlign: "center", marginTop: '80px' }}>
                    <a href="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact us </a >
                    if you want to feature your tutorial on our site! <Emoji symbol="🤙" />
                </h3>
            </div>
        )
    }
}

export default Tutorial