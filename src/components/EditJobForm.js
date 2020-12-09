import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditJobForm(props){
  const {job} = props;
  const firestore = useFirestore();
  function handleEditJobFormSubmission(event){
    console.log(event)
    event.preventDefault();
    props.onEditJob();
    const propsToUpdate =
      {
        company:event.target.company.value,
        jobTitle:event.target.jobTitle.value,
        date:event.target.date.value,
        description:event.target.description.value
      };
    return firestore.update({collection: 'jobs', doc:job.id}, propsToUpdate) 
  }
  return (
    <React.Fragment>
      <form onSubmit = {handleEditJobFormSubmission}>
        <input
          type='text'
          name='company'
          defaultValue={job.company} />
        <input
          type='text'
          name='jobTitle'
          defaultValue={job.jobTitle} />

      
        <input
          type='text'
          name='date'
          defaultValue={job.date} />

          

          <textarea
          type='text'
          name='description'
          defaultValue={job.description} />

        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  )
}
EditJobForm.propTypes = {
  onJobCreation: PropTypes.func
}
export default EditJobForm;


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