import React from 'react';
import { withFirestore, isLoaded  } from 'react-redux-firebase';
import SkillForm from './SkillForm';
import SkillList from './SkillList';
import EditSkillForm from './EditSkillForm'
import SkillDetail from './SkillDetail'
import * as a from '../actions';
import { connect } from 'react-redux';

class SkillController extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  handleSkillClick = () => {
    if (this.state.selectedSkill != null) {
      this.setState({
        selectedSkill: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props; 
      const action = a.toggleSkillForm();
      dispatch(action);
    }
  }

  handleChangingSelectedSkill = (id) => {
    this.props.firestore.get({collection:'skills', doc : id}).then((skill)=>{
      const firestoreSkill = {
        name: skill.get('name'),
        id: skill.id
      }
      this.setState({selectedSkill:firestoreSkill});
    });
  }
 
  handleAddingNewSkillToList = (newSkill) => {
    const { dispatch } = this.props;
    const action = a.toggleSkillForm();
    dispatch(action);
    
  }

  handleDeletingSkill = (id) => {
    this.props.firestore.delete({collection: 'skills', doc: id});
    this.setState({selectedSkill: null});
  }
  handleEditSkillClick = () => {
    this.setState({editing: true});
  }
  handleEditingSkillInList = () => {
    //const { dispatch } = this.props;
    // const action = a.addSkill(skillToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedSkill: null
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
      currentlyVisibleState = <EditSkillForm skill = {this.state.selectedSkill} onEditSkill = {this.handleEditingSkillInList} />
      buttonText = "Return to Skill List";
    } else if (this.state.selectedSkill != null) {
      currentlyVisibleState = 
      <SkillDetail 
        skill = {this.state.selectedSkill} 
        onClickingDelete = {this.handleDeletingSkill} 
        onClickingEdit = {this.handleEditSkillClick} 
        onClickReturn = {this.handleSkillClick}/>
      buttonText = "Return to Skill List";
    } else if (this.props.skillFormVisibleOnPage) {
      currentlyVisibleState = <SkillForm onNewSkillCreation={this.handleAddingNewSkillToList}  />;
      buttonText = "Return to skill List";
    } else {
      currentlyVisibleState = <SkillList  onSkillSelection={this.handleChangingSelectedSkill} />;
      buttonText = "Add Skill";
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
    }else{
      return (
      <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleSkillClick}>{buttonText}</button>
    </React.Fragment>
      )
    }
}
}

SkillController.propTypes ={

}
const mapStateToProps = state => {
  return{
  skillFormVisibleOnPage:state.skillFormVisibleOnPage
}
}
SkillController = connect(mapStateToProps)(SkillController)
export default withFirestore(SkillController)