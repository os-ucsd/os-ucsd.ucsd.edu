import React from "react";
import "../assets/css/main.css";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://twitter.com/" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/groups/OpenSourceUCSD/"
                className="icon brands fa-facebook-f"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                className="icon brands fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/os-ucsd"
                className="icon brands fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                className="icon brands fa-linkedin-in"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="/contact" className="icon solid fa-envelope">
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
