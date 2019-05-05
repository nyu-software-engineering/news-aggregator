import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import Signup from './Signup';
import Login from './Login';
import Newmodal from './Newmodal';

const Card = () => {
  // const signupModal = new Newmodal('Signup');
  return (
    
      <MDBCard style={{ width: "30rem" }}>
        <MDBCardBody>
          <MDBCardTitle>News Aggregator</MDBCardTitle>
          <MDBCardText>
          News Aggregator is intended to pull in RSS feeds from various different news sources and store/index it for easy access to the end user. Examples of news sources can be tech journals like TechCrunch, political and current events news sites such as The New York Times, and sports journals such as ESPN.
          </MDBCardText>
          <MDBRow>
            <MDBCol>
          <Newmodal modalContent={<Signup/>} modalTitle='Sign Up' btnTxt='Sign Up'/>
          </MDBCol>
          <MDBCol>
          {/* {signupModal.signUp && <Newmodal modalContent={<Signup/>} modalTitle='Sign Up' btnTxt='Sign Up'/>} */}
          <Newmodal modalContent={<Login />} modalTitle='Your Account' btnTxt='Log In'/>
          </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    
  )
}

export default Card;