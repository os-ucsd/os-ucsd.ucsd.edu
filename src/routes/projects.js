import React from "react";
import MenuBar from "../components/navbar";
//import "../assets/css/main"
import "../css/project.css";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
        <div className="projectList">{this.showProject()}</div>
      </div>
    );
  }
}

export default Project;
