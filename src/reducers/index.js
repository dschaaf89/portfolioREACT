import jobListReducer from './job-list-reducer';
import projectListReducer from './project-list-reducer';
import skillsListReducer from './skill-list-reducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  masterJobList:jobListReducer,
  masterProjectList:projectListReducer,
  masterSkillsList:skillsListReducer,
  firestore:firestoreReducer
});

export default rootReducer;