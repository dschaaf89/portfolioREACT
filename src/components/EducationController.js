import React from 'react';
import { withFirestore, isLoaded  } from 'react-redux-firebase';
import EducationForm from './EducationForm';
import EducationList from './EducationList';
import EditEducationForm from './EditEducationForm'
import EducationDetail from './EducationDetail'
import * as a from '../actions';
import { connect } from 'react-redux';

class EducationController extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  handleEducationClick = () => {
    if (this.state.selectedEducation != null) {
      this.setState({
        selectedEducation: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleEducationForm();
      dispatch(action);
    }
  }

  handleChangingSelectedEducation = (id) => {
    this.props.firestore.get({collection:'education', doc : id}).then((education)=>{
      const firestoreEducation = {
        school: education.get('school'),
        areaOfStudy: education.get('areaOfStudy'),
        dateRange: education.get('dateRange'),
        description: education.get('description'),

        id: education.id
      }
      this.setState({selectedEducation:firestoreEducation});
    });
  }
 
  handleAddingNewEducationToList = (newEducation) => {
    const { dispatch } = this.props;
    const action = a.toggleEducationForm();
    dispatch(action);
    
  }

  handleDeletingEducation = (id) => {
    this.props.firestore.delete({collection: 'education', doc: id});
    this.setState({selectedEducation: null});
  }
  handleEditEducationClick = () => {
    this.setState({editing: true});
  }
  handleEditingEducationInList = () => {
    //const { dispatch } = this.props;
    // const action = a.addEducation(educationToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedEducation: null
    });
  }
  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
   
    
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditEducationForm education = {this.state.selectedEducation} onEditEducation = {this.handleEditingEducationInList} />
      buttonText = "Return to Education List";
    } else if (this.state.selectedEducation != null) {
      currentlyVisibleState = 
      <EducationDetail 
        onClickReturn = {this.handleEducationClick}
        education = {this.state.selectedEducation} 
        onClickingDelete = {this.handleDeletingEducation} 
        onClickingEdit = {this.handleEditEducationClick} />
      buttonText = "Return to Education List";
    } else if (this.props.educationFormVisibleOnPage) {
      currentlyVisibleState = <EducationForm onNewEducationCreation={this.handleAddingNewEducationToList}  />;
      buttonText = "Return to education List";
    } else {
      currentlyVisibleState = <EducationList  onEducationSelection={this.handleChangingSelectedEducation} />;
      buttonText = "Add Education";
    }
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
        <button onClick={this.handleEducationClick}>{buttonText}</button>
      </React.Fragment>
    )
    }
    
}
}
EducationController.propTypes ={

}
const mapStateToProps = state => {
  return{
  educationFormVisibleOnPage:state.educationFormVisibleOnPage
}
}
EducationController = connect(mapStateToProps)(EducationController)
export default withFirestore(EducationController)