//import Nav from "react-bootstrap/Nav";
import React from "react";
//import menuB from "../assets/js/main.js";
import "../assets/css/main.css";
class MenuBar extends React.Component{

        componentWillUnmount() {
            this._isMounted = false;
        }
       constructor(props) {

            super(props);

            if (this._isMounted) {
                this.setState(props);
            }
            this.switch_view_home = this.switch_view_home.bind(this);
        }
        
        componentDidMount() {
        this._isMounted = true;
        }

        render() {
            return (
                <div> 
                    <header id="header" className="alt">
                        <h1><a href="/"><img src="https://i.ibb.co/1sNPYWn/os-logo.png" alt="some text" height="150%"/></a></h1>
                        <a href="#menu">Menu</a>
                    </header>
                    <nav id="menu">
                    <ul className="links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="generic.html">Generic</a></li>
                        <li><a href="elements.html">Elements</a></li>
                    </ul>
                    <ul className="actions stacked">
                        <li><a href="#" className="button primary fit">Sign Up</a></li>
                        <li><a href="#" className="button fit">Log In</a></li>
                    </ul>
                </nav>
                </div>
            );
        }
    /*
     Routes the user to the home page.
     */    
    switch_view_home = () => {
        this.props.history.push("/home");
    };
    
}

export default MenuBar;