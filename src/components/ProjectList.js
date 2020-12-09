import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function ProjectList(props) {
  useFirestoreConnect([
    { collection: 'projects' }
  ]);
  const projects = useSelector(state => state.firestore.ordered.projects);
  if (isLoaded(projects)) {
    return (
      <React.Fragment>
        <hr />
        {projects.map((project) => {
          return <Project
            whenProjectClicked={props.onProjectSelection}
            name={project.name}
            repo={project.repo}
            liveLink={project.liveLink}
            languages={project.languages}
            description={project.description}
            id = {project.id}
            key = {project.id}
            />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

ProjectList.propTypes = {
  onProjectSelection: PropTypes.func
};

export default ProjectList;