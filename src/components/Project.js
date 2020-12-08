import React from "react";
import PropTypes from "prop-types";

function Project(props){
  return(
  <React.Fragment>
    <h3>{props.name}</h3>
    <h6>{props.repo}-{props.liveLink}-{props.languages}</h6>
    <hr />
    <p>{props.description}</p>
  </React.Fragment>
  );
}
Project.propTypes = {
  name: PropTypes.string,
  repo: PropTypes.string,
  liveLink: PropTypes.string,
  description:PropTypes.string,
  languages:PropTypes.string
  }
  export default Project;