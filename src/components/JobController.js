import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import JobForm from './JobForm';
import JobList from './JobList';
import EditJobForm from './EditJobForm'
import JobDetail from './JobDetail'
import * as a from '../actions';
import { connect } from 'react-redux';

class JobController extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {

    }
  }

  handleJobClick = () => {
   console.log('hererere')
    if (this.state.selectedJob != null) {
      this.setState({
        selectedJob: null,
        editing: false
      });
    } else {
      
      const { dispatch } = this.props;
      const action = a.toggleJobForm();
      dispatch(action);
    }
  }

  handleChangingSelectedJob = (id) => {
    console.log('here now')
    this.props.firestore.get({collection:'jobs', doc : id}).then((job)=>{
      const firestoreJob = {
        company: job.get('company'),
        jobTitle: job.get('jobTitle'),
        date: job.get('date'),
        description: job.get('description'),

        id: job.id
      }
      this.setState({selectedJob:firestoreJob});
    });
  }
 
  handleAddingNewJobToList = (newJob) => {
    const { dispatch } = this.props;
    const action = a.toggleJobForm();
    dispatch(action);
    
  }

  handleDeletingJob = (id) => {
    this.props.firestore.delete({collection: 'jobs', doc: id});
    this.setState({selectedJob: null});
  }
  handleEditJobClick = () => {
    this.setState({editing: true});
  }
  handleEditingJobInList = () => {
    //const { dispatch } = this.props;
    // const action = a.addJob(jobToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedJob: null
    });
  }
  render() {
    const auth = this.props.firebase.auth();
    console.log(this.props)
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    console.log('test')
    // if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing ) {      
        currentlyVisibleState = <EditJobForm job = {this.state.selectedJob} onEditJob = {this.handleEditingJobInList} />
        buttonText = "Return to Job List";
      } else if (this.state.selectedJob != null) {
        currentlyVisibleState = 
        <JobDetail 
          onClickReturn = {this.handleJobClick}
          job = {this.state.selectedJob} 
          onClickingDelete = {this.handleDeletingJob} 
          onClickingEdit = {this.handleEditJobClick} />
        buttonText = "Return to Job List";
      } else if (this.props.jobFormVisibleOnPage) {
        currentlyVisibleState = <JobForm onNewJobCreation={this.handleAddingNewJobToList}  />;
        buttonText = "Return to job List";
      } else {
        currentlyVisibleState = <JobList  onJobSelection={this.handleChangingSelectedJob} />;
        buttonText = "Add Job";
      }
      console.log(((isLoaded(auth)) && (auth.currentUser == null)))

      if ((isLoaded(auth)) && (auth.currentUser == null)) {
        return (
          <React.Fragment>
            {currentlyVisibleState}
          </React.Fragment>
        )
      } 
      else {
        return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleJobClick}>{buttonText}</button>
        </React.Fragment>
      )
      }
    }
  }
// }

JobController.propTypes ={

}
const mapStateToProps = state => {
  return{
  jobFormVisibleOnPage:state.jobFormVisibleOnPage
}
}
JobController = connect(mapStateToProps)(JobController)
export default withFirestore(JobController)