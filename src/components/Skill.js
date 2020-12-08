import React from "react";
import PropTypes from "prop-types";

function Skill(props){
  return(
  <React.Fragment>
    <h3>{props.skill}</h3>
  </React.Fragment>
  );
}
Skill.propTypes = {
  skill: PropTypes.string,
  
  }
  export default Skill;