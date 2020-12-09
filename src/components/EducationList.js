import React from "react";
import PropTypes from "prop-types";
import Education from "./Education";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function EducationList(props) {
  console.log(props.onEducationSelection);
  useFirestoreConnect([
    { collection: 'education' }
  ]);
   const education = useSelector(state => state.firestore.ordered.education);
   if (isLoaded(education)) {
    return (
      <React.Fragment>
        <hr />
        {education.map((x) => {
          return <Education
            whenEducationClicked={props.onEducationSelection}
            school={x.school}
            areaOfStudy={x.areaOfStudy}
            dateRange={x.dateRange}
            description={x.description}
            id = {x.id}
            key = {x.id}
            />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

EducationList.propTypes = {
  onEducationSelection: PropTypes.func
};

export default EducationList;