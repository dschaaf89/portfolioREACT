import React from "react";
import ProjectController from './ProjectController';
import EducationController from './EducationController';
import JobController from './JobController';
import SkillController from './SkillController'; 
import BioController from './BioController'; 
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin";
import Footer from './Footer'
function App() {
  return ( 
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
        <Route path="/Signin">
            <Signin />
          </Route>
          <Route path="/Bio">
            <BioController />
          </Route>
          <Route path="/Job">
            <JobController/>
          </Route>
          <Route path="/Skill">
            <SkillController />
          </Route>
          <Route path="/Project">
            <ProjectController />
          </Route>
          <Route path="/Education">
            <EducationController />
          </Route>

          {/* use for splash page */}
          <Route path="/">
            <BioController />
          </Route>

        </Switch>
      </Router>
      <div id="footer">
          <Footer />
        </div>
    </React.Fragment>

  );
}

export default App;
