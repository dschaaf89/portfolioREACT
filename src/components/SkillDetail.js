import React from 'react';
import PropTypes from 'prop-types';

function SkillDetail(props){
  const { skill, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h3>{skill.name} </h3>
      <button onClick={ props.onClickingEdit }>Update skill</button>
      <button onClick={()=> onClickingDelete(skill.id) }>Delete skill</button>
    </React.Fragment>
  );
}
SkillDetail.propTypes = {
  skill: PropTypes.object,
  onClickingDelete:PropTypes.func,
  onClickingEdit:PropTypes.func
}

export default SkillDetail;
