import React from "react";
import MenuBar from "../components/navbar";
import "../css/project.css";
import axios from "axios";
import { Form, Row, Col, Card, Button } from "react-bootstrap";
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
      projects: [],
      name: "",
      projectName: "",
      link: "",
      description: "",
      technology: "",
      database: ""
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

  handleSubmit(e) {
    e.preventDefault();

    const token = `${process.env.REACT_APP_MY_KEY}`;
    const Info = {
      title: "New Project 6",
      body:
        "Name: Bao Hoang \n \
        Project description: Bla bla bla \n \
        Project repo: something something \n \
        Languages or Frameworks the project use: ... \n \
        Database: N/A",
      assignees: ["bghoang"],
      labels: ["new project"]
    };

    axios
      .post("https://api.github.com/repos/bghoang/git_tutorial/issues", Info, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div id="projectpage">
        <MenuBar />
        <div className="projectList">{this.showProject()}</div>
        <br />
        <Form>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="name" placeholder="Name" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="project">
            <Form.Label column sm="2">
              Project's Name
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="projectName"
                placeholder="Name of the project"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="repo">
            <Form.Label column sm="2">
              Repositories Link
            </Form.Label>
            <Col sm="10">
              <Form.Control type="link" placeholder="Link to the repo" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="description">
            <Form.Label column sm="2">
              Project Description
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="description"
                placeholder="description of the project"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="framework">
            <Form.Label column sm="2">
              Languages or Frameworks the project use
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="technology"
                placeholder="What Languages or Frameworks does the project use"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="Database">
            <Form.Label column sm="2">
              Datebase used
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="database"
                placeholder="what kind of database this project used"
              />
            </Col>
          </Form.Group>
        </Form>

        <Button variant="primary" onClick={this.handleSubmit}>
          Create Pull request
        </Button>
      </div>
    );
  }
}

export default Project;
