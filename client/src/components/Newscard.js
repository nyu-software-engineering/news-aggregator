import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBBtn} from 'mdbreact';

class Newscard extends Component{
    render(){
  return (
    <MDBCol >
      <MDBCard>
        <MDBCardBody>
        <a href={this.props.link}><MDBCardTitle>{this.props.cardTitle}</MDBCardTitle></a>
          <MDBCardText>
            {this.props.cardContent}
            <br></br>
            {this.props.source}
          </MDBCardText>
          <MDBBtn outline color="warning" size="sm">+</MDBBtn>
        </MDBCardBody>

      </MDBCard>
    </MDBCol>
  )
}
}

export default Newscard;