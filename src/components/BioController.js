import React from 'react';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import BioForm from './BioForm';
import Bio from './Bio';
import * as a from '../actions';
import { connect } from 'react-redux';

class BioController extends React.Component {
  constructor (props) {
    super(props) 
    this.state = {

    }
  }

  handleBioClick = () => {
   console.log('hererere')
    if (this.state.selectedBio != null) {
      this.setState({
        selectedBio: null,
        editing: false
      });
    } else {
      
      const { dispatch } = this.props;
      const action = a.toggleBioForm();
      dispatch(action);
    }
  }

  handleChangingSelectedBio = (id) => {
    console.log('here now')
    this.props.firestore.get({collection:'bio', doc : id}).then((bio)=>{
      const firestoreBio = {
        company: bio.get('company'),
        bioTitle: bio.get('bioTitle'),
        date: bio.get('date'),
        description: bio.get('description'),

        id: bio.id
      }
      this.setState({selectedBio:firestoreBio});
    });
  }
 
  

  
  handleEditBioClick = () => {
    this.setState({editing: true});
  }
  handleEditingBioInList = () => {
    //const { dispatch } = this.props;
    // const action = a.addBio(bioToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedBio: null
    });
  }
  render() {
    const auth = this.props.firebase.auth();
    console.log(this.props)
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    console.log('test')
    // if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing ) {  
        
        
        currentlyVisibleState = <BioForm  onEditBio = {this.handleEditingBioInList} />
        buttonText = "Return to Bio";
      } else {
        currentlyVisibleState = <Bio  />;
        buttonText = "Edit Bio";
      }
      console.log(((isLoaded(auth)) && (auth.currentUser == null)))

      if ((isLoaded(auth)) && (auth.currentUser == null)) {
        return (
          <React.Fragment>
            {currentlyVisibleState}
          </React.Fragment>
        )
      } 
      else {
        return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleEditBioClick}>{buttonText}</button>
        </React.Fragment>
      )
      }
    }
  }
// }

BioController.propTypes ={

}
const mapStateToProps = state => {
  return{
  bioFormVisibleOnPage:state.bioFormVisibleOnPage
}
}
BioController = connect(mapStateToProps)(BioController)
export default withFirestore(BioController)