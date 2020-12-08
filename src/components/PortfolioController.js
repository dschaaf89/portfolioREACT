import React from 'react';
import { withFirestore, isLoaded  } from 'react-redux-firebase';
import Bio from './Bio';
import BioForm from './BioForm';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import JobForm from './JobForm';
import JobList from './JobList';
import EducationForm from './EducationForm';
import EducationList from './EducationList';
import SkillsForm from './SkillForm';
import SkillsList from './SkillList';
import * as a from './../actions';
import { connect } from 'react-redux';

class PortfolioController extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  handleProjectClick = () => {
    if (this.state.selectedProject != null) {
      this.setState({
        selectedProject: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleProjectForm();
      dispatch(action);
    }
  }
 
  handleAddingNewProjectToList = (newProject) => {
    const { dispatch } = this.props;
    const action = a.toggleProjectForm();
    dispatch(action);
  }

  handleDeletingProject = (id) => {
    this.props.firestore.delete({collection: 'projects', doc: id});
    this.setState({selectedProject: null});
  }
  handleEditProjectClick = () => {
    this.setState({editing: true});
  }
  handleEditingProjectInList = (projectToEdit) => {
    const { dispatch } = this.props;
    const action = a.addProject(projectToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedProject: null
    });
  }
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditProjectForm project = {this.state.selectedProject} onEditProject = {this.handleEditingProjectInList} />
      buttonText = "Return to Project List";
    } else if (this.state.selectedProject != null) {
      currentlyVisibleState = 
      <ProjectDetail 
        project = {this.state.selectedProject} 
        onClickingDelete = {this.handleDeletingProject} 
        onClickingEdit = {this.handleEditProjectClick} />
      buttonText = "Return to Project List";
    } else if (this.props.projectFormVisibleOnPage) {
      currentlyVisibleState = <ProjectForm onNewProjectCreation={this.handleAddingNewProjectToList}  />;
      buttonText = "Return to project List";
    } else {
      currentlyVisibleState = <ProjectList  onProjectSelection={this.handleChangingSelectedProject} />;
      buttonText = "Add Project";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleProjectClick}>{buttonText}</button>
      </React.Fragment>
    );
    }
}
PortfolioController.propTypes ={

}
const mapStateToProps = state => {
  return{
  projectFormVisibleOnPage:state.projectFormVisibleOnPage
}
}
PortfolioController = connect(mapStateToProps)(PortfolioController)
export default withFirestore(PortfolioController)