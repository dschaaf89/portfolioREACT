import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditProjectForm(props){
  const {project} = props;
  const firestore = useFirestore();
  function handleEditProjectFormSubmission(event){
    event.preventDefault();
    props.onEditProject();
    const propsToUpdate =
      {
        name:event.target.name.value,
        repo:event.target.repo.value,
        liveLink:event.target.liveLink.value,
        languages:event.target.languages.value,
        description:event.target.description.value
        
      };
    return firestore.update({collection: 'projects', doc:project.id}, propsToUpdate) 
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleEditProjectFormSubmission}>
        <input
          type='text'
          name='name'
          defaultValue={project.name} />
        <input
          type='text'
          name='repo'
          defaultValue={project.repo} />

      
        <input
          type='text'
          name='liveLink'
          defaultValue={project.liveLink} />

          <input
          type='text'
          name='languages'
          defaultValue={project.languages} />

          <textarea
          type='text'
          name='description'
          defaultValue={project.description} />

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
EditProjectForm.propTypes = {
  onProjectCreation: PropTypes.func
}
export default EditProjectForm;


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