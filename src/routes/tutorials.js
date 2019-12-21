import React from "react";
import Container from 'react-bootstrap/Container'
import MenuBar from "./navbar";
import "../../assets/css/main.css";
import "../../assets/css/tutorial-style.css";
import "../../assets/js/browser.min.js";

class Tutorials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this._isMounted = true;
    }

    render() {
        return (
            <div>
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
                </div>
            </div>
        );
    }
}

export default Tutorials;