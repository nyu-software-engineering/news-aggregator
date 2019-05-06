import React, { Component }  from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios'

// const Login = () => {
class Login extends Component{

  constructor(props) {
    super(props)
    this.state = {
      email : "",
      password: ""
    }
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
    axios.post('http://localhost:9000/login',this.state)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }*/

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
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
    const {email, password} = this.state;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12">
            <form onSubmit={this.onSubmit}> 
              <p className="h5 text-center mb-4">Log in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  name = "email"
                  validate
                  error="wrong"
                  success="right"
                  value = {this.state.email}
                  onChange={this.handleInputChange}
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  name = "password"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn type = "submit">Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default Login;