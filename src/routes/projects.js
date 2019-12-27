import React from "react";
import MenuBar from "../components/navbar";
import "../assets/css/main.css";
import "../assets/css/tutorial-style.css";
import "../css/home.css";
import Background from "../images/spac.jpg";
import "../css/project.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";

const EachProject = props => {
  return (
    <Card style={{ className: "card", width: "18rem" }}>
      <Card.Img variant="top" src={props.project.owner.avatar_url} />
      <Card.Body>
        <Card.Title>{props.project.name}</Card.Title>
        <Card.Title>{props.project.owner.login}</Card.Title>
        <Card.Text>{props.project.description}</Card.Text>
        <Button variant="primary" href={props.project.html_url}>
          Check Project
        </Button>
      </Card.Body>
    </Card>
  );
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.github.com/search/repositories?q=topic%3Aos-ucsd-project+fork%3Atrue&type=Repositories"
      )
      .then(res => {
        console.log(res.data.items[0]);
        this.setState({ projects: res.data.items });
      })
      .catch(err => console.log(err));
  }

  showProject() {
    return this.state.projects.map(project => {
      return <EachProject project={project} key={project.id} />;
    });
  }

  render() {
    return (
      <div>
        <MenuBar />

        <div className="is-preload">
          {/*Banner*/}
          <section
            id="banner"
            style={{ backgroundImage: `url(${Background})`, height: "20px" }}
          >
            <div className="inner">
              <div className="content">
                <h2>Open Sources Projects</h2>
              </div>
            </div>
          </section>

          <div className="projectList">{this.showProject()}</div>
          <br />

          <Button variant="primary" size="lg" href="/form">
            Large button
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Project;
