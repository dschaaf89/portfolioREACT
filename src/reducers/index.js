import jobListReducer from './job-list-reducer';
import projectListReducer from './project-list-reducer';
import skillFormReducer from './skill-form-reducer';
import educationFormReducer from './education-form-reducer';
import skillsListReducer from './skill-list-reducer';
import jobFormReducer from './job-form-reducer';
import projectFormReducer from './project-form-reducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';


const rootReducer = combineReducers({
  masterJobList:jobListReducer,
  masterProjectList:projectListReducer,
  masterSkillsList:skillsListReducer,
  projectFormVisibleOnPage:projectFormReducer,
  skillFormVisibleOnPage:skillFormReducer,
  jobFormVisibleOnPage:jobFormReducer,
  educationFormVisibleOnPage:educationFormReducer,
  firestore:firestoreReducer
});

export default rootReducer;