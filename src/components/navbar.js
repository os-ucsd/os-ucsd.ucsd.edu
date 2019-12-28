//import Nav from "react-bootstrap/Nav";
import React from "react";
//import Icon from '@material-ui/core/Icon';
//import {Icon} from "antd";
import "../assets/css/main.css";
import "../css/menuBarAnimation.css";
import { slide as Menu } from "react-burger-menu";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    // for animations
    // this.wrapRef = React.createRef();

    if (this._isMounted) {
      this.setState(props);
    }
    // where the menu bar will be on each page
    this.switch_view_home = this.switch_view_home.bind(this);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  componentDidMount() {
    this._isMounted = true;
  }
  showSettings(event) {
    event.preventDefault();
  }
  /*handleClick() {
    const wrap = this.wrapRef.current;
    wrap.classList.toggle('is-nav-open')
  }*/

  render() {
    return (
      <div>
        <header id="header" className="alt">
          <h1>
            <a href="/" id="logo">
              <img
                src="https://i.ibb.co/1sNPYWn/os-logo.png"
                alt="some text"
                height="170%"
              />
            </a>
            <Menu
              right
              isOpen={false}
      
              customBurgerIcon={
                <img src="https://pngimage.net/wp-content/uploads/2018/06/white-menu-icon-png-8.png" alt=""/>
              }
            >
              <a id="home" className="menu-item" href="/">
              <i class="fas fa-home"></i>
              <span> Home</span>
              </a>

              <a id="about" className="menu-item" href="/about">
              <i class="fas fa-users"></i>
              <span> About</span>
              </a>

              <a id="project" className="menu-item" href="/project">
              <i class="fas fa-laptop-code"></i>
              <span> Projects</span>
              </a>

              <a id="tutorial" className="menu-item" href="/tutorials">
                <i className="fas fa-book-open"></i>
                <span> Tutorials</span>
              </a>

              <a id="event" className="menu-item" href="/event">
                <i className="fas fa-calendar-day"></i>
                <span> Events</span>
              </a>

              <a id="contact" className="menu-item" href="/contact">
                <i class="fas fa-envelope-square"></i>
                <span> Contact</span>
              </a>
            </Menu>
          </h1>
        </header>
      </div>
    );
  }

  switch_view_home = () => {
    this.props.history.push("/home");
  };
}

export default MenuBar;
