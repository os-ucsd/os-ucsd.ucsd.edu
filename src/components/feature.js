import React from "react";
import "../assets/css/main.css";

class Feature extends React.Component {
  render() {
    return (
      <div>
        <div className="features">
          <section>
            <span className="icon solid major fa-tag"></span>
            <h3>Quam adipiscing</h3>
            <p>
              Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet
              porttitor lorem justo in cumsan quam ultricies magna tempus.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-camera-retro"></span>
            <h3>Semper accumsan</h3>
            <p>
              Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet
              porttitor lorem justo in cumsan quam ultricies magna tempus.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-cloud"></span>
            <h3>Ipsum lorem magna</h3>
            <p>
              Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet
              porttitor lorem justo in cumsan quam ultricies magna tempus.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-cube"></span>
            <h3>Tempus sed mattis</h3>
            <p>
              Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet
              porttitor lorem justo in cumsan quam ultricies magna tempus.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-file-alt"></span>
            <h3>Odio fermentum</h3>
            <p>
              Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet
              porttitor lorem justo in cumsan quam ultricies magna tempus.
            </p>
          </section>
          <section>
            <span className="icon solid major fa-plane"></span>
            <h3>Risus et interdum</h3>
            <p>
              Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet
              porttitor lorem justo in cumsan quam ultricies magna tempus.
            </p>
          </section>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="#" className="button major">
                More Features
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Feature;
