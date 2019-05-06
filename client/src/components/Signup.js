import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
//import axios from 'axios'

class FormPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name : "",
      email : "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /*handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
    axios.post('http://localhost:9000/register',this.state)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }*/

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    fetch('http://localhost:9000/register', 
    {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    //.then(json => {this.setState({name: json})})
    .catch(err => {
      console.error(err);
      alert('Error signing up please try again');
    });
  }

  render(){
  const {name, email, password} = this.state;
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                name = "name"
                validate
                error="wrong"
                success="right"
                value = {this.state.name}
                onInput={this.handleInputChange}
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                name = "email"
                validate
                error="wrong"
                success="right"
                value = {this.state.email}
                onInput={this.handleInputChange}
              />
              {/*<MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                name = "email"
                validate
                error="wrong"
                success="right"
                value = {this.state.email}
                onChange={this.handleInputChange}
              />*/}
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                name = "password"
                validate
                value = {this.state.password}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary" onClick={this.onSubmit}>Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
}

export default FormPage;