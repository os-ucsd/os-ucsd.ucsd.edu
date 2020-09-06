import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import tutorialData from "../data/tutorial-data.js";
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
        this.props.history.push("/tutorials/" + tutorial["url"]);
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
            <div>
                <Header />
                <h2 style={{ marginTop: "100px", fontSize: "40px", textAlign: "center", padding: "10px" }}>All Tutorials</h2>

                <div className="tutorialList">{tutorialCards}</div>

                <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Tutorial