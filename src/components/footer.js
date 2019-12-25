import React from "react";
import "../assets/css/main.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-facebook-f">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-linkedin-in">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon solid fa-envelope">
                <span className="label">Envelope</span>
              </a>
            </li>
          </ul>
          <ul className="contact">
            <li>9500 Gilman Dr</li>
            <li>La Jolla, CA 92093</li>
          </ul>
          <ul className="links">
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <p className="copyright">&copy; OS UCSD. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
