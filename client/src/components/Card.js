import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Signup from './Signup';
import Newmodal from './Newmodal';

const Card = () => {
  const signupModal = new Newmodal('Signup');
  return (
    <MDBCol>
      <MDBCard style={{ width: "30rem" }}>
        <MDBCardBody>
          <MDBCardTitle>News Aggregator</MDBCardTitle>
          <MDBCardText>
          News Aggregator is intended to pull in RSS feeds from various different news sources and store/index it for easy access to the end user. Examples of news sources can be tech journals like TechCrunch, political and current events news sites such as The New York Times, and sports journals such as ESPN.
          </MDBCardText>
          {signupModal.signUp && <Newmodal modalContent={<Signup/>} Title='Sign Up' btnTxt='Sign Up'/>}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;