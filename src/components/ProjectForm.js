import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function ProjectForm(props){
  const firestore = useFirestore();
  function addProjectToFirestore(event){
    event.preventDefault();
    //props.OnProjectCreation();
    return firestore.collection('projects').add(
      {
        name:event.target.name.value,
        repo:event.target.repo.value,
        liveLink:event.target.liveLink.value,
        languages:event.target.languages.value,
        description:event.target.description.value
        
      }); 
  }
  return (
    <React.Fragment>
      <form onSubmit = {addProjectToFirestore}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='repo'
          placeholder='Repo' />
        <input
          type='text'
          name='liveLink'
          placeholder='LiveLink.' />
          <input
          type='text'
          name='languages'
          placeholder='Languages' />
          <textarea
          type='text'
          name='description'
          placeholder='Description' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
ProjectForm.propTypes = {
  onProjectCreation: PropTypes.func
}
export default ProjectForm;