import React from "react";
import MenuBar from "../components/navbar";
import "../assets/css/main.css";
import "../assets/css/tutorial-style.css";
import "../css/home.css";
import Background from "../images/project.jpg";
import "../css/project.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";

// Show all the projects that we can contribute
const EachProject = props => {
  return (
    <Card style={{ className: "card", width: "20rem" }}>
      <Card.Img variant="top" src={props.project.owner.avatar_url} />
      <Card.Body>
        <Card.Title> Project's Name: {props.project.name}</Card.Title>
        <Card.Title>Owner: {props.project.owner.login}</Card.Title>
        <Card.Text> Description: {props.project.description}</Card.Text>
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
    // Update project list
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

  // Method to show the EachProject component
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

          <h3 className="firstTitle">
            All the projects that you can contribute to
          </h3>

          <h4>Want to share your project so other can contribute? </h4>

          <Button variant="primary" size="lg" href="/form">
            Share Project
          </Button>

          <div className="projectList">{this.showProject()}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Project;
