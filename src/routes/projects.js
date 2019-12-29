import React from "react";
import MenuBar from "../components/navbar";
import Background from "../images/project.jpg";
import "../css/project.css";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Button, ButtonGroup } from "@material-ui/core/";
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
        <Button
          variant="outlined"
          color="primary"
          href={props.project.html_url}
        >
          Check Project
        </Button>
      </Card.Body>
    </Card>
  );
};

//Content actual layout of the project page
class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      currentPage: 1,
      projectPerPage: 10
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickFirst = this.handleClickFirst.bind(this);
    this.handleClickLast = this.handleClickLast.bind(this);
  }

  // Get Project list from github api
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

  handleClick(pageNumber) {
    //console.log(event);
    this.setState({
      currentPage: Number(pageNumber)
    });
  }

  handleClickFirst(e) {
    this.setState({
      currentPage: 1
    });
  }

  handleClickLast(e) {
    const totalPages = Math.ceil(
      this.state.projects.length / this.state.projectPerPage
    );
    this.setState({
      currentPage: totalPages
    });
  }

  // Method to show the EachProject component
  showProject(projects) {
    return projects.map(project => {
      return <EachProject project={project} key={project.id} />;
    });
  }

  // Method to render the pagination
  renderPageNumber(totalPages) {
    return totalPages.map(number => {
      return (
        <Button key={number} onClick={() => this.handleClick(number)}>
          {number}
        </Button>
      );
    });
  }

  render() {
    // Update the current projects to show and the pages
    const { projects, currentPage, projectPerPage } = this.state;
    const indexOfLastTodo = currentPage * projectPerPage;
    const indexOfFirstTodo = indexOfLastTodo - projectPerPage;
    const shownProjects = projects.slice(indexOfFirstTodo, indexOfLastTodo);
    let pages = [];
    for (let i = 1; i <= Math.ceil(projects.length / projectPerPage); i++) {
      pages.push(i);
    }

    return (
      <div>
        <MenuBar />

        {/*Banner*/}
        <section
          id="banner"
          style={{ backgroundImage: `url(${Background})`, height: "20px" }}
        >
          <div className="inner">
            <div className="content">
              <h2>Open Source Projects</h2>
            </div>
          </div>
        </section>

        <h3 className="firstTitle">
          All the projects that you can contribute to
        </h3>
        <h4>Want to share your project so other can contribute? </h4>

        {/* Submit Project */}
        <Button variant="contained" color="primary" size="large" href="/form">
          Share Project
        </Button>

        {/* Show the list of all the projects */}
        <div className="projectWrapper">
          <div className="projectList">{this.showProject(shownProjects)}</div>
        </div>

        {/** Pagination section */}
        <ButtonGroup
          size="small"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button onClick={this.handleClickFirst}> {"<<"}</Button>
          {this.renderPageNumber(pages)}
          <Button onClick={this.handleClickLast}> {">>"}</Button>
        </ButtonGroup>

        <br />
        <br />
        <br />

        <Footer />
      </div>
    );
  }
}

export default Project;
