import React from "react";
import PropTypes from "prop-types";

function Education(props){
  console.log(props)
  return(
  <React.Fragment>
    <div onClick = {() => props.whenEducationClicked(props.id)}>
      <h3>{props.school}</h3>
      <h6>{props.areaOfStudy}-{props.dateRange}</h6>
      <hr />
      <p>{props.description}</p>
    </div>
  </React.Fragment>
  );
}
Education.propTypes = {
  whenEducationClicked:PropTypes.func,
  school: PropTypes.string,
  areaOfStudy: PropTypes.string,
  dateRange: PropTypes.string,
  description:PropTypes.string,
  id : PropTypes.string
  }
  export default Education;