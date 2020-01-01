//import Nav from "react-bootstrap/Nav";
import React from "react";
//import Icon from '@material-ui/core/Icon';
//import {Icon} from "antd";
import "../assets/css/main.css";
import "../css/menuBarAnimation.css";
import { slide as Menu } from "react-burger-menu";
import Grid from '@material-ui/core/Grid';

import "../assets/css/navbar.css";

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

    customBurgerIcon={
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/white-menu-icon-png-8.png" alt=""/>
                  }
  }*/

  render() {
    const {borgColor} = this.props;
    // styles for borg (to change color of borg)
    let styles = {
      bmBurgerButton: {
        width: '20px',
        height: '20px',
        marginTop: '15px',
        marginRight: '10px'
      },
      bmBurgerBars: {
        background: borgColor,
      },

    }

    return (
      <div>
        <header id="header" className="alt">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <a href="/" id="logo">
                <img className='logo-img'
                  src="https://i.ibb.co/1sNPYWn/os-logo.png"
                  alt="some text"
                  height="60px"
                />
              </a>
            </Grid>
            <Grid item xs={9}>
              <div className='menu-items'>
                <a id="home" className="menu-item" href="/">
                  <span className='menu-text'> Home</span>
                </a>

                <a id="about" className="menu-item" href="/about">
                  <span className='menu-text'> About</span>
                </a>

                <a id="project" className="menu-item" href="/project">
                  <span className='menu-text'> Projects</span>
                </a>

                <a id="tutorial" className="menu-item" href="/tutorials">
                  <span className='menu-text'> Tutorials</span>
                </a>

                <a id="event" className="menu-item" href="/event">
                  <span className='menu-text'> Events</span>
                </a>

                <a id="contact" className="menu-item" href="/contact">
                  <span className='menu-text'> Contact</span>
                </a>
              </div>
              <div className='menu-burger'>
                <Menu
                  right
                  isOpen={false}
                  className='borg'
                  styles={styles}
                >
                  <a id="home" className="menu-item" href="/">
                  <i className="fas fa-home"></i>
                  <span> Home</span>
                  </a>

                  <a id="about" className="menu-item" href="/about">
                  <i className="fas fa-users"></i>
                  <span> About</span>
                  </a>

                  <a id="project" className="menu-item" href="/project">
                  <i className="fas fa-laptop-code"></i>
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
                    <i className="fas fa-envelope-square"></i>
                    <span> Contact</span>
                  </a>
                </Menu>
              </div>
            </Grid>
          </Grid>
        </header>
      </div>
    );
  }

  switch_view_home = () => {
    this.props.history.push("/home");
  };
}

export default MenuBar;
