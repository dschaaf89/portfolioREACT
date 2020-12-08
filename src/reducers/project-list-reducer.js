
import * as c from './../actions/ActionTypes';
// eslint-disable-next-line import/no-anonymous-default-export
export default(state = {}, action)=> {
  const {name,repo,liveLink,languages,description,id} = action;
  switch (action.type) {
    case c.ADD_PROJECT:
      return Object.assign({},state,{
        [id]:{
          name:name,
          repo:repo,
          liveLink:liveLink,
          languages:languages,
          description:description
        }
      });
      case c.DELETE_PROJECT:
        const newState = {...state};
        delete newState[id];
        return newState;
    default: 
    return state;
  }
};