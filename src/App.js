import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import Project from "./routes/projects";
import Contact from "./routes/contact";
import Event from "./routes/event";
import WorkShop from "./routes/workshop";
import Tutorials from "./routes/tutorials";
import TutorialPage from "./routes/tutorial-page";
import "./css/menuBarAnimation.css";
function App() {
  console.log(`${process.env.REACT_APP_MY_KEY}`);
  return (
    <Router>
      <main id="page-wrap" className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/workshop" component={WorkShop} />
        <Route exact path="/tutorials" component={Tutorials} />
        <Route path="/tutorials/:tutorialID" component={TutorialPage} />
      </main>
    </Router>
  );
}

export default App;
