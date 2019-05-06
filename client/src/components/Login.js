import React, { Component }  from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

// const Login = () => {
class Login extends Component{

  constructor(props) {
    super(props)
    this.state = {
      email : props.email,
      password: props.password
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = () => {
    fetch('http://localhost:9000/login', 
    {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
      'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => console.log(res.data))
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }
  
  render(){
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <p className="h5 text-center mb-4">Log in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
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
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                value={this.state.password}
                onInput={this.handleInputChange}
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={this.onSubmit}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
}
export default Login;