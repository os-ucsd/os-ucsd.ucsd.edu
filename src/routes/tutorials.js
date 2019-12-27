import React from "react";
import MenuBar from "../components/navbar";
import "../assets/css/main.css";
import "../assets/css/tutorial-style.css";
import "../css/home.css";
import tutorialMeta from "./tutorials-meta.js";
import Container from "react-bootstrap/Container";
import Background from "../images/space5.jpg";
import Footer from "../components/footer";

var moment = require("moment");

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

        //Create a card for each tutorial in the meta file
        tutorialCards = Object.keys(this.state.tutorialMeta).map(key =>{
            let tutorial = this.state.tutorialMeta[key];
            return(
                    <section className={"tutorialBox"} key={tutorial.url} onClick={() => {this.openTutorial(tutorial)}} >
                        <span className="icon solid major fa-cube"></span>
                        <h3 style={{minHeight: "10rem", paddingTop:"0.5rem"}}>{tutorial["title"]}</h3>
                        <p className={"mb-0"}>By: {tutorial["authors"].name}</p>
                        <p>Published: {moment(tutorial['publish']).format("lll")}</p>
                    </section>
            );
        });



        return (
            <div>
                <MenuBar />

                <div className="is-preload">
                    {/*Banner*/}
                    <section id="banner" style={{backgroundImage: `url(${Background})`, height: "20px"}}>
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
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Tutorials;
