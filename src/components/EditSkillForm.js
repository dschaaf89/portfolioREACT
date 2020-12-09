import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditSkillForm(props){
  const {skill} = props;
  const firestore = useFirestore();
  function handleEditSkillFormSubmission(event){
    event.preventDefault();
    props.onEditSkill();
    const propsToUpdate =
      {
        name:event.target.name.value,
     
        
      };
    return firestore.update({collection: 'skills', doc:skill.id}, propsToUpdate) 
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleEditSkillFormSubmission}>
        <input
          type='text'
          name='name'
          defaultValue={skill.name} />
        

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
EditSkillForm.propTypes = {
  onSkillCreation: PropTypes.func
}
export default EditSkillForm;


// function EditTicketForm (props) {
//   const { ticket } = props;

//   function handleEditTicketFormSubmission(event) {
//     event.preventDefault();
//     props.onEditTicket({names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, timeOpen: ticket.timeOpen, formattedWaitTime: ticket.formattedWaitTime, id: ticket.id});
//   }
//   return (
//     <React.Fragment>
//       <ReusableForm 
//         formSubmissionHandler={handleEditTicketFormSubmission}
//         buttonText="Update Ticket" />
//     </React.Fragment>
//   );
// }
// EditTicketForm.propTypes = {
//   onEditTicket: PropTypes.func
// };