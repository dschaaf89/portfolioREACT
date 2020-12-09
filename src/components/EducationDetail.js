import React from 'react';
import PropTypes from 'prop-types';

function EducationDetail(props){
  const { education, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h3>{education.school} </h3>
      <h3>{education.areaOfStudy} </h3>
      <h3>{education.dateRange} </h3>
      <h3>{education.description} </h3>
      <button onClick={ props.onClickingEdit }>Update education</button>
      <button onClick={()=> onClickingDelete(education.id) }>Delete education</button>
    </React.Fragment>
  );
}
EducationDetail.propTypes = {
  education: PropTypes.object,
  onClickingDelete:PropTypes.func,
  onClickingEdit:PropTypes.func
}

export default EducationDetail;
