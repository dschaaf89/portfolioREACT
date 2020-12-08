import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
function Bio(props){
  useFirestoreConnect([
    { collection: 'bio' }
  ]); 
   const b = useSelector(state => state.firestore.ordered.bio);
  console.log(b)

  console.log(b)


  if (isLoaded(b)) {
    return (
      <React.Fragment>
        <hr />
        
          <h3>{b[0].name}</h3>
          <h6>{b[0].github}-{b[0].linkedin}-{b[0].email}</h6>
          <hr />
          <p>{b[0].about}</p>
        
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }












//   return(
//   <React.Fragment>
//     <h3>{props.name}</h3>
//     <h6>{props.github}-{props.linkedin}-{props.email}</h6>
//     <hr />
//     <p>{props.about}</p>
//   </React.Fragment>
//   );
 }
Bio.propType = {
name: PropTypes.string,
github:PropTypes.string,
linkedin:PropTypes.string,
email: PropTypes.string,
about:PropTypes.string
}
export default Bio;