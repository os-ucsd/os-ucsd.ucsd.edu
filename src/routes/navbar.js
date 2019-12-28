//import Nav from "react-bootstrap/Nav";
import React from "react";
//import Icon from '@material-ui/core/Icon';
//import {Icon} from "antd";
import "../css/menuBarAnimation.css";
import { slide as Menu } from 'react-burger-menu'
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
  showSettings (event) {
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
            <a href="/">
              <img
                src="https://i.ibb.co/1sNPYWn/os-logo.png"
                alt="some text"
                height="150%"
              />
            </a>
            <Menu right isOpen={ false } width={ '20%' } customBurgerIcon={ <img src="https://pngimage.net/wp-content/uploads/2018/06/white-menu-icon-png-8.png" alt=""/> }>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="/">Settings</a>
            </Menu> 

          </h1>
        </header>

    </div>
    );
  }
  /*
        <header id="header" className="alt">
        <h1>
          <a href="/">
            <img
              src="https://i.ibb.co/1sNPYWn/os-logo.png"
              alt="some text"
              height="150%"
            />
          </a>
        </h1>
        <a>
          <Icon
                className="nav__icon"
                type="menu-fold"
                onClick={() => this.handleClick()}
              />
      
              <div className="nav__body">
                Body
              </div>
          </a>
      </header>
 */
  /*
   /*<div ref={this.wrapRef} className="alt wrap">
        <header className="nav">
            <Icon
              className="nav__icon"
              type="menu-fold"
              onClick={() => this.handleClick()}
            />
            <div className="nav__body">
              helloworld
            </div>
        </header>*/
    /*
       <header id="header" className="alt">
          <h1>
            <a href="/">
              <img
                src="https://i.ibb.co/1sNPYWn/os-logo.png"
                alt="some text"
                height="150%"
              />
            </a>
          </h1>
          <a href="#menu">Menu</a>
        </header>



        <nav id="menu">
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="generic.html">Generic</a>
            </li>
            <li>
              <a href="elements.html">Elements</a>
            </li>
          </ul>
          <ul className="actions stacked">
            <li>
              <a href="#" className="button primary fit">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="button fit">
                Log In
              </a>
            </li>
          </ul>
        </nav>
    */
   /*
     Routes the user to the home page.
     */

  switch_view_home = () => {
    this.props.history.push("/home");
  };
}

export default MenuBar;
