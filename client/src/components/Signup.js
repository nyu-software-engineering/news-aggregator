import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios'

class FormPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name : "",
      username : "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
    //const {name, username, password} = this.state;
    axios.post('http://localhost:9000/register', this.state)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

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
    .then(res => console.log(res))  
    //.then(json => {this.setState({name: json})})
    .catch(err => {
      alert(console.log(err));
      console.log(err);
    });
  }

  render(){
  //const {name, username, password} = this.state;
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit = {this.onSubmit}>
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
                name = "username"
                validate
                error="wrong"
                success="right"
                value = {this.state.username}
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
              <MDBBtn color="primary" type = "submit">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
}

export default FormPage;