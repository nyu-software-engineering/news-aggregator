import React, { Component } from 'react';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, 
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../Routes";
import Modal from '../Modal';
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
                        <MDBDropdownItem href="https://www.wsj.com/">WSJ</MDBDropdownItem>
                        <MDBDropdownItem href="#!">ESPN</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                    <Modal modalContent={<Login />} modalTitle='Your Account' btnTxt='Log In'/>
                    </MDBNavItem>
                    
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