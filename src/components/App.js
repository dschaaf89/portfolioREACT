import React from "react";
import ProjectController from './ProjectController';
import EducationController from './EducationController';
import JobController from './JobController';
import SkillController from './SkillController'; 
import Bio from './Bio'; 
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return ( 
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
        
          <Route path="/Bio">
            <Bio />
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
            <Bio />
          </Route>
          
        </Switch>
      </Router>
    </React.Fragment>

  );
}

export default App;
