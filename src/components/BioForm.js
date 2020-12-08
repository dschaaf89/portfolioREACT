import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function BioForm(props){
  const firestore = useFirestore();
  function addBioToFirestore(event){
    event.preventDefault();
    //props.OnBioCreation();
    return firestore.collection('bio').add(
      {
        name:event.target.name.value,
        github:event.target.github.value,
        linkedin:event.target.linkedin.value,
        email:event.target.email.value,
        about:event.target.about.value
      }); 
  }
  return (
    <React.Fragment>
      <form onSubmit = {addBioToFirestore}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='github'
          placeholder='Github' />
        <input
          name='linkedin'
          placeholder='Linkedin.' />
          <input
          type='text'
          name='email'
          placeholder='Email' />
          <textarea
          type='text'
          name='about'
          placeholder='About' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
BioForm.propTypes = {
  onBioCreation: PropTypes.func
}
export default BioForm;