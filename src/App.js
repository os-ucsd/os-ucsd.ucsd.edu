import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/home";
import Project from "./routes/projects";
import Contact from "./routes/contact";
import Event from "./routes/event";
import WorkShop from "./routes/workshop";
<<<<<<< HEAD
import Tutorials from "./routes/tutorials";

=======
import { slide as Menu } from 'react-burger-menu'
import "./css/menuBarAnimation.css";
>>>>>>> 8d0a53ccb855028d8e7178f8221f2eccc166bf14
function App() {
  return (
    <Router>
 
      <main id="page-wrap" className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/event" component={Event} />
        <Route exact path="/workshop" component={WorkShop} />
<<<<<<< HEAD
        <Route exact path="/tutorials" component={Tutorials} />
      </div>
=======
      </main>
>>>>>>> 8d0a53ccb855028d8e7178f8221f2eccc166bf14
    </Router>
  );
}

export default App;
