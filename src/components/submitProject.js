import React from "react";
import MenuBar from "../components/navbar";
import "../assets/css/main.css";
import "../assets/css/tutorial-style.css";
import "../css/home.css";
import "../css/project.css";
import Background from "../images/spac.jpg";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/footer";

class SubmitProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      projectName: "",
      link: "",
      description: "",
      technology: "",
      database: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handleProject = this.handleProject.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleDes = this.handleDes.bind(this);
    this.handleTech = this.handleTech.bind(this);
    this.handleDatabase = this.handleDatabase.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleProject(e) {
    this.setState({
      projectName: e.target.value
    });
  }

  handleLink(e) {
    this.setState({
      link: e.target.value
    });
  }

  handleDes(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleTech(e) {
    this.setState({
      technology: e.target.value
    });
  }

  handleDatabase(e) {
    this.setState({
      database: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const token = `${process.env.REACT_APP_MY_KEY}`;

    const Info = {
      title: `${this.state.projectName}`,
      body:
        "Name: " +
        `${this.state.name}` +
        "\n" +
        "Project description: " +
        `${this.state.description}` +
        "\n" +
        "Project repo: " +
        `${this.state.link}` +
        "\n" +
        "Languages or Frameworks the project use: " +
        `${this.state.technology}` +
        "\n" +
        "Database: " +
        `${this.state.database}`,
      assignees: ["blau0123"],
      labels: ["New Project"]
    };

    axios
      .post(
        "https://api.github.com/repos/os-ucsd/os-ucsd.ucsd.edu/issues",
        Info,
        {
          headers: { Authorization: "Bearer " + token }
        }
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));

    window.location = "/project";
  }

  render() {
    const style = {
      fontSize: "20px",
      fontWeight: "bold"
    };
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

          <h4>Fill out this form and click the button</h4>

          {/* Form to fill in */}
          <div className="form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="name">
                <Form.Label column sm="2" style={style}>
                  Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="name"
                    placeholder="Your name"
                    value={this.state.name}
                    onChange={this.handleName}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="project">
                <Form.Label column sm="2" style={style}>
                  Project's Name
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="projectName"
                    placeholder="Name of the project"
                    value={this.state.projectName}
                    onChange={this.handleProject}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="repo">
                <Form.Label column sm="2" style={style}>
                  Repositories Link
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="link"
                    placeholder="Link to the project's repository"
                    value={this.state.link}
                    onChange={this.handleLink}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="description">
                <Form.Label column sm="2" style={style}>
                  Project Description
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="description"
                    placeholder="Short description of the project"
                    value={this.state.description}
                    onChange={this.handleDes}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="framework">
                <Form.Label column sm="2" style={style}>
                  Languages or Frameworks
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="technology"
                    placeholder="What languages or frameworks does the project use?"
                    value={this.state.technology}
                    onChange={this.handleTech}
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="Database">
                <Form.Label column sm="2" style={style}>
                  Datebase used
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    type="database"
                    placeholder="What kind of database does the project use?"
                    value={this.state.database}
                    onChange={this.handleDatabase}
                  />
                </Col>
              </Form.Group>

              <Button
                className="submitBut"
                variant="primary"
                type="submit"
                size="lg"
              >
                Submit Project
              </Button>
            </Form>
          </div>
          <div className="submitBut"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SubmitProject;
