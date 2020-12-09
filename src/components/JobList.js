import React from "react";
import PropTypes from "prop-types";
import Job from "./Job";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function JobList(props) {
  useFirestoreConnect([
    { collection: 'jobs' }
  ]);
  const jobs = useSelector(state => state.firestore.ordered.jobs);
  if (isLoaded(jobs)) {
    return (
      <React.Fragment>
        <hr />
        {jobs.map((job) => {
          return <Job
            whenJobClicked={props.onJobSelection}
            company={job.company}
            jobTitle={job.jobTitle}
            date={job.date}
            description={job.description}
            id={job.id}
            key={job.id}
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

JobList.propTypes = {
  onJobSelection: PropTypes.func
};

export default JobList;