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
import Footer from "./components/footer";
import Header from "./components/header";
import FormSubmit from "./components/formSubmit"

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Header />
      <div style={{ paddingBottom: '8rem' }}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/tutorial" component={Tutorial} />
          <Route path="/tutorial/:tutorialID" component={TutorialComponent} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/events" component={Event} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/formSubmitted" component={FormSubmit} />
          <Route exact path="/hacktoberfest" component={Hacktoberfest} />
        </Router>
      </div>
      <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;