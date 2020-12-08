import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function SkillList(props){
  const firestore = useFirestore();
  function addSkillToFirestore(event){
    event.preventDefault();
    //props.OnProjectCreation();
    return firestore.collection('skills').add(
      {
        skill:event.target.skill.value,
  
        
      }); 
  }
  return (
    <React.Fragment>
      <form onSubmit = {addSkillToFirestore}>
        <input
          type='text'
          name='skill'
          placeholder='skills' />
       
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
SkillList.propTypes = {
  onProjectCreation: PropTypes.func
}
export default SkillList;