import React from 'react';
import PropTypes from 'prop-types';
import { withFirestore, isLoaded } from 'react-redux-firebase';


function JobDetail(props){
  const { job, onClickingDelete } = props;
  console.log(props)
  if ((isLoaded(props.firebase.auth())) && (props.firebase.auth().currentUser == null)) {
    return (
      <React.Fragment>
      <h3>{job.company} </h3>
      <h3>{job.jobTitle} </h3>
      <h3>{job.date} </h3>
      <h3>{job.description} </h3>
      <button onClick={ props.onClickReturn }>Return to List</button>
      </React.Fragment>
    )
  } 
  else {
    return (
      <React.Fragment>
      <h3>{job.company} </h3>
      <h3>{job.jobTitle} </h3>
      <h3>{job.date} </h3>
      <h3>{job.description} </h3>
      <button onClick={ props.onClickingEdit }>Update job</button>
      <button onClick={()=> onClickingDelete(job.id) }>Delete job</button>
    </React.Fragment>
  )
  }
  
}
JobDetail.propTypes = {
  job: PropTypes.object,
  onClickingDelete:PropTypes.func,
  onClickingEdit:PropTypes.func,
  onClickReturn:PropTypes.func
}

export default withFirestore(JobDetail);