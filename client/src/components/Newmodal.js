import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader} from 'mdbreact';

class Newmodal extends Component {
    constructor(modalType){
        super();
        this.signUp = false;
        if(modalType === 'Signup'){
            this.signUp = true;
        }
    }

    state = {
    modal: false
    }

    toggle = () => {
    this.setState({
        modal: !this.state.modal
    });
    }

render() {

  return (
    <MDBContainer>
      <MDBBtn size={this.props.btnSize} onClick={this.toggle}>{this.props.btnTxt}</MDBBtn>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>{this.props.modalTitle}</MDBModalHeader>
        <MDBModalBody>
          {this.props.modalContent}
        </MDBModalBody>
        
      </MDBModal>
    </MDBContainer>
    )
  }
}

export default Newmodal;