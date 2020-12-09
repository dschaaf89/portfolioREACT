import React from 'react';
import PropTypes from 'prop-types';

function JobDetail(props){
  const { job, onClickingDelete } = props;
  console.log(props)
  return(
    <React.Fragment>
      <h3>{job.company} </h3>
      <h3>{job.jobTitle} </h3>
      <h3>{job.date} </h3>
      <h3>{job.description} </h3>
      <button onClick={ props.onClickingEdit }>Update job</button>
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