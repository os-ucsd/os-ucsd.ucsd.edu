import React from "react";
import MenuBar from "./navbar";
import "../../assets/css/main.css";
import "../../assets/css/tutorial-style.css";
import "../../assets/js/browser.min.js";
import tutorialMeta from "./tutorials-meta.js";
import Container from "react-bootstrap/Container"

var moment = require('moment');

class Tutorials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tutorialMeta: tutorialMeta,
            showingTutorial: false,
            currentTutorialFile: "",
            body: null
        };
        this.openTutorial = this.openTutorial.bind(this);
    }

    //Will show a modal with the tutorial on it
    openTutorial(tutorial){
        this.props.history.push('/tutorials/' + tutorial["url"]);
    }


    componentDidMount() {
        this._isMounted = true;

    }

    render() {

        let tutorialCards = [];

        tutorialCards = Object.keys(this.state.tutorialMeta).map(key =>{
            let tutorial = this.state.tutorialMeta[key];
            return(
                    <section key={tutorial.url} onClick={() => {this.openTutorial(tutorial)}}>
                        <span className="icon solid major fa-cube"></span>
                        <h3>{tutorial["title"]}</h3>
                        <p>
                            By: {tutorial["authors"].name} (Github: {tutorial["authors"].github})
                            Published: {moment(tutorial['publish']).format("lll")}
                        </p>
                    </section>
            );
        });



        return (
            <Container>
                <MenuBar />

                <div className="is-preload">
                    {/*Banner*/}
                    <section id="tutorial-banner">
                        <div className="inner">
                            <div  className="content">
                                <h2>Open Source at UCSD Tutorials</h2>
                            </div>
                        </div>
                    </section>

                    {/*All Tutorials Section*/}
                    <section id="two" className="wrapper style2">
                        <div className="inner">
                            <header className="major">
                                <h2>All Tutorials</h2>
                            </header>
                            <div className="features">
                                {tutorialCards}
                            </div>
                        </div>
                    </section>
                </div>
            </Container>
        );
    }
}

export default Tutorials;