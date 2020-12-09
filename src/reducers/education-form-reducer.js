import * as c from './../actions/ActionType';

export default (state = false, action) => {
  switch (action.type) {
  case c.TOGGLE_EDUCATION_FORM:
    return !state;
  default:
    return state;
  }
};