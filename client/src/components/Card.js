import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Modal from './Modal';
import Signup from './Signup';

const Card = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "30rem" }}>
        <MDBCardBody>
          <MDBCardTitle>News Aggregator</MDBCardTitle>
          <MDBCardText>s
          News Aggregator is intended to pull in RSS feeds from various different news sources and store/index it for easy access to the end user. Examples of news sources can be tech journals like TechCrunch, political and current events news sites such as The New York Times, and sports journals such as ESPN.
          </MDBCardText>
          <Modal modalContent={<Signup/>} modalTitle='Sign Up' btnTxt='Sign Up'/>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default Card;