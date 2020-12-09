import React from "react";
import PropTypes from "prop-types";

function Skill(props){
  return(
  <React.Fragment>
    <div onClick = {() => props.whenSkillClicked(props.id)}>
      <h3>{props.name}</h3>
    </div>
  </React.Fragment>
  );
}
Skill.propTypes = {
  skill: PropTypes.string,
  id:PropTypes.string
  
  }
  export default Skill;