import React from 'react';
import PropTypes from 'prop-types';
import { withFirestore ,isLoaded} from 'react-redux-firebase';

function SkillDetail(props){
  const { skill, onClickingDelete } = props;
  if ((isLoaded(props.firebase.auth())) && (props.firebase.auth().currentUser == null)) {
  return(
    <React.Fragment>
      <h3>{skill.name} </h3>
      <button onClick={ props.onClickReturn }>Return to List</button>
    </React.Fragment>
  );
}else {
  return(
    <React.Fragment>
      <h3>{skill.name} </h3>
      <button onClick={ props.onClickingEdit }>Update skill</button>
      <button onClick={()=> onClickingDelete(skill.id) }>Delete skill</button>
    </React.Fragment>
  );
}
}
SkillDetail.propTypes = {
  skill: PropTypes.object,
  onClickingDelete:PropTypes.func,
  onClickingEdit:PropTypes.func
}

export default withFirestore(SkillDetail);
