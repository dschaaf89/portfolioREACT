import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function JobForm(props){
  const firestore = useFirestore();
  function addJobToFirestore(event){
    event.preventDefault();
    props.onNewJobCreation();
    return firestore.collection('jobs').add(
      {
        company:event.target.company.value,
        jobTitle:event.target.jobTitle.value,
        date:event.target.date.value,
        description:event.target.description.value
        
      }); 
  }
  return (
    <React.Fragment>
      <form onSubmit = {addJobToFirestore}>
        <input
          type='text'
          name='company'
          placeholder='Company' />
        <input
          type='text'
          name='jobTitle'
          placeholder='jobTitle' />
        <input
          type='text'
          name='date'
          placeholder='date.' />
          <textarea
          type='text'
          name='description'
          placeholder='Description' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
JobForm.propTypes = {
  onNewJobCreation: PropTypes.func
}
export default JobForm;