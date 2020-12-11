import React from 'react';
import { withFirestore, isLoaded  } from 'react-redux-firebase';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import EditProjectForm from './EditProjectForm'
import ProjectDetail from './ProjectDetail'
import * as a from '../actions';
import { connect } from 'react-redux';

class ProjectController extends React.Component {
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

  handleChangingSelectedProject = (id) => {
    this.props.firestore.get({collection:'projects', doc : id}).then((project)=>{
      const firestoreProject = {
        name: project.get('name'),
        languages: project.get('languages'),
        repo: project.get('repo'),
        liveLink: project.get('liveLink'),
        description: project.get('description'),
        id: project.id
      }
      this.setState({selectedProject:firestoreProject});
    });
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
  handleEditingProjectInList = () => {
    //const { dispatch } = this.props;
    // const action = a.addProject(projectToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedProject: null
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
      currentlyVisibleState = <EditProjectForm project = {this.state.selectedProject} onEditProject = {this.handleEditingProjectInList} />
      buttonText = "Return to Project List";
    } else if (this.state.selectedProject != null) {
      currentlyVisibleState = 
      <ProjectDetail 
        project = {this.state.selectedProject} 
        onClickingDelete = {this.handleDeletingProject} 
        onClickingEdit = {this.handleEditProjectClick}
        onClickReturn = {this.handleProjectClick}/>
      buttonText = "Return to Project List";
    } else if (this.props.projectFormVisibleOnPage) {
      currentlyVisibleState = <ProjectForm onNewProjectCreation={this.handleAddingNewProjectToList}  />;
      buttonText = "Return to project List";
    } else {
      currentlyVisibleState = <ProjectList  onProjectSelection={this.handleChangingSelectedProject} />;
      buttonText = "Add Project";
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
    }else{
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleProjectClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
}
}
ProjectController.propTypes ={

}
const mapStateToProps = state => {
  return{
  projectFormVisibleOnPage:state.projectFormVisibleOnPage
}
}
ProjectController = connect(mapStateToProps)(ProjectController)
export default withFirestore(ProjectController)