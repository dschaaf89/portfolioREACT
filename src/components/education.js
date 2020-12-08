import React from "react";
import PropTypes from "prop-types";

function Education(props){
  return(
  <React.Fragment>
    <h3>{props.school}</h3>
    <h6>{props.areaOfStudy}-{props.dateRange}</h6>
    <hr />
    <p>{props.description}</p>
  </React.Fragment>
  );
}
Education.propTypes = {
  school: PropTypes.string,
  areaOfStudy: PropTypes.string,
  dateRange: PropTypes.string,
  description:PropTypes.string,
  }
  export default Education;