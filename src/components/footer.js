import React from "react";
import "../assets/css/main.css";
import FacebookIcon from "@material-ui/icons/Facebook";
//import TwitterIcon from "@material-ui/icons/Twitter";
//import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://www.facebook.com/groups/OpenSourceUCSD/">
                <FacebookIcon />
              </a>
            </li>
            {/*<li>
              <a href="https://www.instagram.com/">
                <InstagramIcon />
              </a>
            </li>*/}
            <li>
              <a href="https://github.com/os-ucsd">
                <GitHubIcon />
              </a>
            </li>
            {/*<li>
              <a href="https://www.linkedin.com/">
                <LinkedInIcon />
              </a>
            </li>*/}
            <li>
              <a href="/contact">
                <MailIcon />
              </a>
            </li>
          </ul>
          <ul className="contact">
            <li>9500 Gilman Dr</li>
            <li>La Jolla, CA 92093</li>
          </ul>
          <ul className="links">
            <li>
              <a href="/about">FAQ</a>
            </li>
            <li>
              <a href="/project">Contribute</a>
            </li>
            <li>
              <a href="/about">Terms</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <p className="copyright">&copy; OS at UCSD. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
