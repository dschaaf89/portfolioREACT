import React from "react";
import PropTypes from "prop-types";

function Jobs(props){
  return(
  <React.Fragment>
    <h3>{props.company}</h3>
    <h6>{props.jobTitle}-{props.date}</h6>
    <hr />
    <p>{props.description}</p>
  </React.Fragment>
  );
}
Jobs.propTypes = {
  company: PropTypes.string,
  jobTitle: PropTypes.string,
  date: PropTypes.string,
  description:PropTypes.string,
  }
  export default Jobs;