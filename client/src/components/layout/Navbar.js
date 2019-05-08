import React, { Component } from 'react';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../Routes";
import Newmodal from '../Newmodal';
import Login from '../Login';


class Navbar extends Component{
    state={
        collapseID: ""
      }
    
      toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    
      closeCollapse = collapseID => () =>
        this.state.collapseID === collapseID && this.setState({ collapseID: "" });
    

render() {
    const { collapseID } = this.state;
    const loginModal = new Newmodal('Login');

    // console.log("foo");
    // console.log(foo);
    // const savedforlaterurl = "/savedforlater/:username=" + foo;
  return (
      <Router>
          <div className="flyname">
            <MDBNavbar color="blue" dark expand="md">
                <MDBNavbarBrand>
                <strong className="white-text">News Aggregator</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("mainNavbarCollapse")} />
                <MDBCollapse id="mainNavbarCollapse" isOpen={this.state.collapseID} navbar>
                <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/mynews">My News</MDBNavLink>
                    </MDBNavItem>

                    <MDBNavItem>
                    <MDBNavLink onClick={this.closeCollapse("mainNavbarCollapse")}
                    to="/savedforlater">Saved for Later</MDBNavLink>
                    </MDBNavItem>



                    <MDBNavItem>
                    <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                        <span className="mr-2">Sources</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                        <MDBDropdownItem href="https://www.nytimes.com/">NYTimes</MDBDropdownItem>
                        <MDBDropdownItem href="http://www.espn.com/">ESPN</MDBDropdownItem>
                        <MDBDropdownItem href="https://techcrunch.com/">TechCrunch</MDBDropdownItem>
                        <MDBDropdownItem href="https://www.reuters.com/">Reuters</MDBDropdownItem>
                        <MDBDropdownItem href="https://www.hackerrank.com/">HackerRank</MDBDropdownItem>
                        <MDBDropdownItem href="https://www.usatoday.com/">USA Today</MDBDropdownItem>
                        <MDBDropdownItem href="https://www.washingtonpost.com/">Washington Post</MDBDropdownItem>
                        <MDBDropdownItem href="https://www.cinemablend.com/">Cinema Blend</MDBDropdownItem>
                      
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                   <MDBNavItem>
                    {/* {!loginModal.signUp && <Newmodal modalContent={<Login />} modalTitle='Your Account' btnTxt='Log In'/>} */}
                    {/* <Newmodal modalContent={<Login />} modalTitle='Your Account' btnTxt='Log In'/> */}
  </MDBNavItem> 
  
          {/* <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
                <MDBDropdownItem href="#!">Log In</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem> */}
                    
                </MDBNavbarNav>
                 
                
                </MDBCollapse>
                    
            </MDBNavbar>

            {collapseID}
          <main >
            <Routes />
          </main>
      </div>
      </Router>
    );
  }
}

export default Navbar;