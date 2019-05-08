import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBBtn} from 'mdbreact';

class Newscardsaved extends Component{

    render(){
  return (
    <MDBCol >
      <MDBCard>
        <MDBCardBody>
        <a href={this.props.link}><MDBCardTitle>{this.props.cardTitle}</MDBCardTitle></a>
          <MDBCardText>
            {this.props.pubdate}
          </MDBCardText>
        </MDBCardBody>

      </MDBCard>
    </MDBCol>
  )
}
}

export default Newscardsaved;