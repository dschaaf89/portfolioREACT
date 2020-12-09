import React from "react";
import PropTypes from "prop-types";
import Skill from "./Skill";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SkillList(props) {
  useFirestoreConnect([
    { collection: 'skills' }
  ]);
  const skill = useSelector(state => state.firestore.ordered.skills);
  if (isLoaded(skill)) {
    return (
      <React.Fragment>
        <hr />
        {skill.map((skill) => {
          return <Skill
            whenSkillClicked={props.onSkillSelection}
            name={skill.name}
            id = {skill.id}
            key = {skill.id}
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

SkillList.propTypes = {
  onSkillSelection: PropTypes.func
};

export default SkillList;