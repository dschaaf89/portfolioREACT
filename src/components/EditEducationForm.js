import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditEducationForm(props){
  const {education} = props;
  const firestore = useFirestore();
  function handleEditEducationFormSubmission(event){
    event.preventDefault();
    props.onEditEducation();
    const propsToUpdate =
      {
        name:event.target.name.value,
     
        
      };
    return firestore.update({collection: 'education', doc:education.id}, propsToUpdate) 
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleEditEducationFormSubmission}>
      <input
          type='text'
          name='school'
          defaultValue={education.school} />
        <input
          type='text'
          name='areaOfStudy'
          defaultValue={education.areaOfStudy} />

        <input
          type='text'
          name='dateRange'
          defaultValue={education.dateRange} />

          <textarea
          type='text'
          name='description'
          defaultValue={education.description} />

        

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
EditEducationForm.propTypes = {
  onEducationCreation: PropTypes.func
}
export default EditEducationForm;


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