import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, Row, Col } from 'mdbreact';

class Newscard extends Component{
    render(){
  return (
    <MDBCol >
      <MDBCard>
      <Row>
        <Col md="4">
        <MDBCardImage className="img-fluid" src={this.props.imgSource}/>
        </Col>
        <Col md="8">
        <MDBCardBody>
        <a href={this.props.link}><MDBCardTitle>{this.props.cardTitle}</MDBCardTitle></a>
          <MDBCardText>
            {this.props.cardContent}
            <br></br>
            {this.props.source}
          </MDBCardText>
        </MDBCardBody>
        </Col>
        </Row>
      </MDBCard>
    </MDBCol>
  )
}
}

export default Newscard;