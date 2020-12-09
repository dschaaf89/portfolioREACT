import * as c from './../actions/ActionType';

export default (state = false, action) => {
  console.log('here')
  switch (action.type) {
  case c.TOGGLE_JOB_FORM:
    return !state;
  default:
    return state;
  }
};