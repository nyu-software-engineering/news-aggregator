import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

class FormPage extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      name : props.name,
      email : props.email,
      password: props.password
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = () => {
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
    .then(json => {this.setState({name: json})})
    .catch(err => {
      console.error(err);
      alert('Error signing up please try again');
    });
  }

  render(){
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
                validate
                id = {'todoName' + this.props.id}
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
                validate
                error="wrong"
                success="right"
                value = {this.state.email}
                onInput={this.handleInputChange}
              />
              <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value = {this.state.email}
                onInput={this.handleInputChange}
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
                value = {this.state.password}
                onInput={this.handleInputChange}
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