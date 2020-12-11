import React from 'react';
import PropTypes from 'prop-types';
import { withFirestore ,isLoaded} from 'react-redux-firebase';

function ProjectDetail(props){
  const { project, onClickingDelete } = props;
  if ((isLoaded(props.firebase.auth())) && (props.firebase.auth().currentUser == null)) {
  return(
    <React.Fragment>
      <h1>Project Detail</h1>
      <h3>{project.name} - {project.languages}</h3>
      <p><em>{project.repo}</em></p>
      <p><em>{project.liveLink}</em></p>
      <p><em>{project.description}</em></p>
      <button onClick={ props.onClickReturn }>Return to List</button>
    </React.Fragment>
  );
}else{
  return(
    <React.Fragment>
      <h1>Project Detail</h1>
      <h3>{project.name} - {project.languages}</h3>
      <p><em>{project.repo}</em></p>
      <p><em>{project.liveLink}</em></p>
      <p><em>{project.description}</em></p>
      <button onClick={ props.onClickingEdit }>Update Project</button>
      <button onClick={()=> onClickingDelete(project.id) }>Delete project</button>
    </React.Fragment>
  );
  }
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
  onClickingDelete:PropTypes.func,
  onClickingEdit:PropTypes.func
}

export default withFirestore(ProjectDetail);