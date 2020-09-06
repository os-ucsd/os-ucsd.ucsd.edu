import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./routes/home"
import About from "./routes/about"
import Tutorial from "./routes/tutorial"
import Project from "./routes/project"
import Event from "./routes/event"
import Contact from "./routes/contact"
import Hacktoberfest from "./routes/hacktoberfest"
import TutorialComponent from "./components/tutorial-component";
import FormSubmit from "./components/formSubmit"

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/tutorials" component={Tutorial} />
      <Route path="/tutorials/:tutorialID" component={TutorialComponent} />
      <Route exact path="/projects" component={Project} />
      <Route exact path="/events" component={Event} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/hacktoberfest" component={Hacktoberfest} />
      <Route exact path="/formSubmitted" component={FormSubmit} />
    </Router>
  );
}

export default App;