import React from 'react';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';

function EducationDetail(props){
  const { education, onClickingDelete } = props;


if ((isLoaded(props.firebase.auth())) && (props.firebase.auth().currentUser == null)) {
  return (
    <React.Fragment>
      <h3>{education.school} </h3>
      <h3>{education.areaOfStudy} </h3>
      <h3>{education.dateRange} </h3>
      <h3>{education.description} </h3>
      
      <button onClick={()=> props.onClickReturn() }>Return </button>
    </React.Fragment>
  )
} 
else {
  return (
    <React.Fragment>
      <h3>{education.school} </h3>
      <h3>{education.areaOfStudy} </h3>
      <h3>{education.dateRange} </h3>
      <h3>{education.description} </h3>
      <button onClick={ props.onClickingEdit }>Update education</button>
      <button onClick={()=> onClickingDelete(education.id) }>Delete education</button>
    </React.Fragment>
)
}
}

EducationDetail.propTypes = {
  education: PropTypes.object,
  onClickingDelete:PropTypes.func,
  onClickingEdit:PropTypes.func
}

export default withFirestore(EducationDetail);
