import React from "react";
import PropTypes from "prop-types";

function Jobs(props){
  return(
  <React.Fragment>
    <div onClick = {() => props.whenJobClicked(props.id)}>
      <h3>{props.company}</h3>
      <h6>{props.jobTitle}-{props.date}</h6>
      <hr />
      <p>{props.description}</p>
    </div>
  </React.Fragment>
  );
}
Jobs.propTypes = {
  whenJobClicked:PropTypes.func,
  company: PropTypes.string,
  jobTitle: PropTypes.string,
  date: PropTypes.string,
  description:PropTypes.string,
  id : PropTypes.string
  }
  export default Jobs;