import React from "react";
import PropTypes from "prop-types";

function Project(props){
  return(
  <React.Fragment>
    <div onClick = {() => props.whenProjectClicked(props.id)}>
      <h3>{props.name}</h3>
      <h6>{props.repo}-{props.liveLink}-{props.languages}</h6>
      <hr />
      <p>{props.description}</p>
    </div>
  </React.Fragment>
  );
}
Project.propTypes = {
  whenProjectClicked: PropTypes.func,
  name: PropTypes.string,
  repo: PropTypes.string,
  liveLink: PropTypes.string,
  description:PropTypes.string,
  languages:PropTypes.string,
  id:PropTypes.string
  }
  export default Project;