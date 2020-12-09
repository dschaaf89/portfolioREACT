import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EducationForm(props){
  const firestore = useFirestore();
  function addEducationToFirestore(event){
    event.preventDefault();
    props.onNewEducationCreation();
    return firestore.collection('education').add(
      {
        school:event.target.school.value,
        areaOfStudy:event.target.areaOfStudy.value,
        dateRange:event.target.dateRange.value,
        description:event.target.description.value
       
        
      }); 
  }
  return (
    <React.Fragment>
      <form onSubmit = {addEducationToFirestore}>
        <input
          type='text'
          name='school'
          placeholder='school' />
        <input
          type='text'
          name='areaOfStudy'
          placeholder='areaOfStudy' />
        <input
          type='text'
          name='dateRange'
          placeholder='dateRange.' />
          <textarea
          type='text'
          name='description'
          placeholder='Description' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
EducationForm.propTypes = {
  onNewEducationCreation: PropTypes.func
}
export default EducationForm;