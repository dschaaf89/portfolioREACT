import React from 'react';
import PropTypes from 'prop-types';

function JobDetail(props){
  const { job, onClickingDelete } = props;
  return(
    <React.Fragment>
      <h1>Job Detail</h1>
      <h3>{job.name} - {job.languages}</h3>
      <p><em>{job.repo}</em></p>
      <p><em>{job.liveLink}</em></p>
      <p><em>{job.description}</em></p>
      <button onClick={ props.onClickingEdit }>Update Job</button>
      <button onClick={()=> onClickingDelete(job.id) }>Delete job</button>
    </React.Fragment>
  );
}
JobDetail.propTypes = {
  job: PropTypes.object,
  onClickingDelete:PropTypes.func,
  onClickingEdit:PropTypes.func
}

export default JobDetail;